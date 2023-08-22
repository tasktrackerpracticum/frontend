import { NavLink } from 'react-router-dom';
import avatar from '../../images/user-avatar-profile.png';
import exit from '../../images/exit.svg';
import logo from '../../images/logo.svg';
import { activeType, boolType, functionType } from '../../constatnts/prop-types';
import SearchForm from '../SearchForm/SearchForm.jsx';
import { useSelector } from 'react-redux';

export default function Header({ active, setActive, onLogout }) {
  const toggleClass = () => {
    setActive(!active);
  };

  const currentUser = useSelector((state) => state.user.user);

  return (
    <header className='header'>
      <NavLink to='/' className='header__container'>
        <img className='header__logo' src={logo} alt='logo' />
      </NavLink>
      <SearchForm />
      <div className='header__link-container'>
        <div className='header__avatar-profile'>
          <img
            src={currentUser.photo   ? currentUser.photo : avatar}
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
  active: boolType,
  setActive: activeType,
  onLogout: functionType
};
