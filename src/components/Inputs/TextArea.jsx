import { useTranslation } from 'react-i18next';

export function TextArea ({ id, title, placeholder, state, setState, variant = 'purpleInput', regex }) {
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
    <div>
      <label htmlFor={id} className='block mb-[10px] text-sm font-medium text-ft-gray'>{`${t(title)}*`}</label>
      <textarea
        id={id}
        rows='4'
        className={`2xl:h-[174px] h-[116px] bg-transparent border border-ft-gray text-ft-gray placeholder:text-ft-gray font-normal text-sm rounded-lg focus:ring-ft-purple focus:border-ft-purple block w-full p-[14px] mb-[14px] ${variants[validateInput(state.value)]}`}
        placeholder={t(placeholder)}
        value={state.value}
        onChange={handleChange}
        autoComplete={id}
        required
      />
    </div>
  );
}
