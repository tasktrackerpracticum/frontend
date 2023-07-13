import { Route, NavLink } from 'react-router-dom';
import defaultIcon from '../../images/icon.svg';
import options from '../../images/options.svg';
import logo from '../../images/logo.svg';
import { activeFunctionType } from '../../constatnts/prop-types';
import SearchForm from "../SearchForm/SearchForm.jsx";

export default function Header({ active, setActive }) {
  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <Route path={['/organization', '/project', '/']}>
      <header className='header'>
        <NavLink to='/' className='header__container'>
          <img className='header__logo' src={logo} alt='logo' />
          <h2 className='header__title'>Лого</h2>
        </NavLink>
		<SearchForm />
        <div className='header__link-container'>
		<div className="header__logout"> Выйти </div>
          <div className='header__options'>
            <img src={options} alt='options' className='header__options-icon' onClick={toggleClass}/>
          </div>
          <div className='header__avatar-profile'>
            <img
              src={defaultIcon}
              alt='avatar'
              className='header__avatar-icon'
              onClick={toggleClass}
            />
          </div>
        </div>
      </header>
    </Route>
  );
}

Header.propTypes = {
  active: activeFunctionType,
  setActive: activeFunctionType,
};
