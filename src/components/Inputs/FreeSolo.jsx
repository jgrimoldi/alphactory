import { useTranslation } from 'react-i18next';
import CreatableSelect from 'react-select/creatable';

export function FreeSolo ({ options = [], id, title, placeholder, state, variant = 'purpleInput', setState, classes }) {
  const { t } = useTranslation();
  const variants = {
    purpleInput: 'focus:ring-ft-purple focus:border-ft-purple',
    greenInput: 'focus:ring-bg-green focus:border-bg-green '
  };

  const handleChange = (newValue, actionMeta) => {
    setState(newValue);
  };

  return (
    <div className={`pb-[14px] ${classes}`}>
      <label className='block text-sm font-medium text-ft-gray cursor-pointer'>{`${t(title)}*`}
        <CreatableSelect
          id={id}
          unstyled
          isMulti
          options={options}
          value={state}
          onChange={handleChange}
          placeholder={t(placeholder)}
          getOptionLabel={(option) => t(option.label)}
          className={`bg-transparent border border-ft-gray text-ft-gray placeholder:text-ft-gray font-normal text-sm rounded-lg block w-full max-h-[50px] px-[14px] mt-2.5 py-1.5 ${variants[variant]}`}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              padding: '8px',
              marginLeft: '-14px',
              backgroundColor: 'white',
              color: 'black'
            }),
            option: (baseStyles, { isFocused, isSelected }) => ({
              ...baseStyles,
              fontFamily: 'Poppins',
              padding: '4px',
              backgroundColor: isFocused ? 'lightgray' : isSelected ? 'silver' : 'white',
              textTransform: 'capitalize',
              color: 'black'
            })
          }}
        />
      </label>
    </div>
  );
}
