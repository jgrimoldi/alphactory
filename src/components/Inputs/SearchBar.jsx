import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { slugify } from '../../utils/slugify';
import { URLS } from '../../constants/URLs';
import { useTranslation } from 'react-i18next';

export function SearchBar ({ id, classes }) {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if (searchValue) {
      const url = slugify(searchValue);
      navigate(url);
      setSearchValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`relative h-auto ${classes}`}>
      <input
        id={id}
        placeholder={t('search')}
        className='w-full 2xl:max-w-[320px] max-w-[213px] 2xl:h-[45px] h-[40px] border-br-gray font-normal rounded-full border-1 2xl:text-base text-xs px-6 placeholder:text-ft-black placeholder:font-normal focus:ring-ft-purple transition-all duration-500 ease-in-out'
        type='search'
        value={searchValue}
        onChange={handleChange}
        onBlur={handleSearch}
        onKeyDown={handleKeyPress}
        list='results'
        autoComplete='results'
      />
      <datalist id='results'>
        {URLS.map((search, index) => <option key={index} value={t(search.title)} />)}
      </datalist>

      <label htmlFor={id}>
        <i className='pi pi-search 2xl:text-xl text-base absolute right-4 top-2/4 -translate-y-1/2' />
      </label>
    </div>
  );
}
