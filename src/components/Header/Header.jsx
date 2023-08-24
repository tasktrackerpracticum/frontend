import { NavLink } from 'react-router-dom';
import exit from '../../images/exit.svg';
import logo from '../../images/logo.svg';
import {
  activeType,
  boolType,
  functionType,
} from '../../constatnts/prop-types';
import SearchForm from '../SearchForm/SearchForm.jsx';
import { useSelector } from 'react-redux';
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';

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
        <div className='header__avatar-profile'  onClick={toggleClass}>
        {currentUser.photo ? (
            <AvatarPic pic={currentUser.photo} size={48} />
          ) : (
            <AvatarLetter
              nameUser={currentUser.first_name}
              surnameUser={currentUser.last_name}
              size={48}
            />
          )}
        </div>
        <div className='header__exit'>
          <button onClick={onLogout} className="header__exit-btn">
            <img src={exit} alt='exit' className='header__exit-icon' />
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  active: boolType,
  setActive: activeType,
  onLogout: functionType,
};
