import { useTranslation } from 'react-i18next';

export function RadioButton ({ value, selected, setSelected, children }) {
  const { t } = useTranslation();
  const selectedStyles = '!bg-ip-light-gray !text-ft-dark-green';
  const commonStyles = 'bg-transparent text-black py-0.5 px-4 rounded-full font-medium md:text-base text-sm hover:bg-ip-light-gray hover:text-ft-dark-green hover:ring-1 hover:ring-ft-dark-green';

  return (
    <div className={`${selected === value && selectedStyles} ${commonStyles} `}>
      <input
        type='radio' id={value} name='productAction' value={t(value)}
        checked={selected === value}
        onChange={() => setSelected(value)}
        className='hidden'
      />
      <label htmlFor={value} className='p-2 inline-block cursor-pointer'>{children}</label>
    </div>
  );
}
