import { NavLink } from 'react-router-dom';
import defaultIcon from '../../images/icon.svg';
import exit from '../../images/exit.svg';
import logo from '../../images/logo.svg';
import { activeType, functionType, setActiveType } from '../../constatnts/prop-types';
import SearchForm from '../SearchForm/SearchForm.jsx';

export default function Header({ active, setActive, onLogout }) {
  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <header className='header'>
      <NavLink to='/' className='header__container'>
        <img className='header__logo' src={logo} alt='logo' />
        <h2 className='header__title'>Лого</h2>
      </NavLink>
      <SearchForm />
      <div className='header__link-container'>
        <div className='header__avatar-profile'>
          <img
            src={defaultIcon}
            alt='avatar'
            className='header__avatar-icon'
            onClick={toggleClass}
          />
        </div>
        <div className='header__exit'>
          <button onClick={onLogout}><img src={exit} alt='exit' className='header__exit-icon' /></button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  active: activeType,
  setActive: setActiveType,
  onLogout: functionType
};
