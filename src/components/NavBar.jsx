import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { Container, SwitchLanguage } from './Interface/index';
import { SearchBar } from './Inputs/index';
import { LogoTypePurpleBlack } from '../assets/Images';

function NavBar () {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navLinkStyles = 'h-full flex justify-center items-center rounded-full p-2 hover:bg-black hover:text-white';

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header>
      <Container styles='flex items-center justify-between sm:gap-0 gap-2 2xl:my-[33px] my-22'>
        <Link to='/alphactory'>
          <picture>
            <img className='2xl:w-[201px] sm:w-[134px] sm:h-auto h-7' src={LogoTypePurpleBlack} alt='Logo Alphactory' />
          </picture>
        </Link>

        <div className='sm:flex hidden 2xl:w-[252px] 2xl:h-[45px] w-[182px] h-[40px] rounded-full bg-ip-gray font-semibold 2xl:text-base text-xs justify-around items-center'>
          <NavLink
            to='/alphinance'
            className={({ isActive }) => `w-full ${navLinkStyles} ${isActive ? 'bg-black text-white' : ''}`}
          >Alphinance
          </NavLink>
          <NavLink
            to='/py'
            className={({ isActive }) => `2xl:w-24 w-16 ${navLinkStyles} ${isActive ? 'bg-black text-white' : ''}`}
          >Py
          </NavLink>
        </div>

        <div className='flex justify-center items-center gap-8 md:gap-3'>
          <SwitchLanguage />
          <SearchBar id='searchDesktop' classes='sm:inline-block hidden' />

          <div className='sm:hidden inline-block z-0'>
            <button aria-label='Show navbar' className='flex justify-center items-center z-20' onClick={() => setIsOpen(!isOpen)}>
              <i className='pi pi-bars text-[28px] hover:text-ip-purple' />
            </button>
            {isOpen &&
              <nav className='absolute right-2 top-14 bg-white border boder-ft-gray max-w-[260px] w-full h-52 py-6 -z-10 flex flex-col items-center p-8 justify-between rounded-lg'>
                <div className='flex flex-col items-center gap-4'>
                  <NavLink
                    to='/alphinance'
                    className={({ isActive }) => `font-medium text-base hover:text-ip-purple ${isActive ? 'text-ip-purple' : ''}`}
                  >Alphinance
                  </NavLink>
                  <NavLink
                    to='/py'
                    className={({ isActive }) => `font-medium text-base hover:text-ip-purple ${isActive ? 'text-ip-purple' : ''}`}
                  >Py
                  </NavLink>
                </div>
                <SearchBar id='searchMobile' />
              </nav>}
          </div>
        </div>

      </Container>
    </header>
  );
}

export default NavBar;
