import { useTranslation } from 'react-i18next';

export function Input ({ id, list, options, title, type = 'text', placeholder, state, setState, regex = '', variant = 'purpleInput', classes }) {
  const { t } = useTranslation();
  const variants = {
    purpleInput: 'focus:ring-ft-purple focus:border-ft-purple',
    greenInput: 'focus:ring-bg-green focus:border-bg-green ',
    redInput: 'focus:ring-red-500 focus:border-red-500'
  };

  const validateInput = (value) => {
    if (value === '') {
      return variant;
    }
    const re = new RegExp(regex);
    return re.test(value) ? variant : 'redInput';
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const isValid = new RegExp(regex).test(value);
    setState({ value, error: !isValid });
  };

  return (
    <div className={`pb-[14px] ${classes}`}>
      <label htmlFor={id} className='block pb-[10px] text-sm font-medium text-ft-gray cursor-pointer'>{`${t(title)}*`}</label>
      <input
        id={id}
        list={list}
        name={list}
        type={type}
        value={state.value}
        onChange={handleChange}
        className={`bg-transparent border border-ft-gray text-ft-gray placeholder:text-ft-gray font-normal text-sm rounded-lg block w-full p-[14px] ${variants[validateInput(state.value)]}`}
        autoComplete={id}
        autoCapitalize='sentences'
        placeholder={t(placeholder)} required
      />
      {list &&
        <datalist id={list}>
          {options.map((option) => (
            <option key={option.value} value={option.label}>
              {option.value}
            </option>
          ))}
        </datalist>}
    </div>
  );
}
