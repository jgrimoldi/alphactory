import { useTranslation } from 'react-i18next';

export function Dropdown ({ options = [], id, title, placeholder, state, variant = 'purpleInput', setState, classes = '' }) {
  const { t } = useTranslation();
  const variants = {
    purpleInput: 'focus:ring-ft-purple focus:border-ft-purple bg-transparent text-ft-gray placeholder:text-ft-gray border-ft-gray',
    greenInput: 'focus:ring-bg-green focus:border-bg-green bg-ip-light text-ft-muted placeholder:text-ft-muted border-none'
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className={`pb-[14px] ${classes}`}>
      <label htmlFor={id} className={`block pb-[10px] text-sm font-medium ${variant === 'purpleInput' ? 'text-ft-gray' : 'text-ft-muted'} cursor-pointer`}>{`${t(title)}*`}</label>
      <select
        id={id}
        value={state}
        onChange={handleChange}
        aria-label={t(title)}
        className={`border font-normal text-sm rounded-lg block w-full p-[14px] ${variants[variant]}`}
      >
        <option className='text-ft-gray' value='' disabled>{t(placeholder)}</option>
        {options.map((option, index) => (
          <option key={index} className='text-black text-sm capitalize' value={option.value}>
            {t(option.label)}
          </option>
        ))}
      </select>

    </div>
  );
}
