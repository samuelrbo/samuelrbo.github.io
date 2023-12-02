import { BASE_PAGE_TITLE } from '@shared/constants';
import { LayoutContext } from '@shared/layout/Layout';
import { useContext } from 'react';
import './style.css';

const Header = () => {
  const { theme } = useContext(LayoutContext);

  return (
    <header className='header'>
      <a href='/'>
        <img
          src={`/images/${theme}_profile.jpg`}
          className='profile'
          alt='profile'
          height={140}
          width={140}
        />
      </a>

      <h1 className='mainTitle'>{BASE_PAGE_TITLE}</h1>
    </header>
  );
};

export default Header;
