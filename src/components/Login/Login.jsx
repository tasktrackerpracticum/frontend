import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import { loginFunctionType, stringType } from '../../constatnts/prop-types';
import Slider from '../Slider/Slider';
import logo from '../../images/logo.svg';
import { FORGOT_PASSWORD, UNAUTHORIZED } from '../../constatnts/constants.js';

function Login({ onLogin, resStatus }) {
  const { values, handleChange, showPassword, handleTogglePassword } = useValidation();
  const [isFocused, setIsFocused] = useState(false);
 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values.email, values.password);
  };

  const isDisabled = !(values.email && values.password);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const authText = (resStatus === 401 ? UNAUTHORIZED : false);

  return (
    <section className='auth'>
      <div className='auth__block auth__block_left'>
        <div className='auth__container auth__container_left'>
          <div className='auth__top'>
            <img className='auth__logo' src={logo} alt='logo' />
            <form className='auth__form' onSubmit={handleSubmit}>
              <input
                className='auth__input auth__input_type_email'
                id='email'
                name='email'
                type='email'
                value={values.email || ''}
                placeholder={'Email'}
                required
                onChange={handleChange}
              />
              <div className={`auth__input-wrap ${isFocused ? 'focused' : ''}`}>
                <input
                  className='auth__input auth__input_type_password'
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={values.password || ''}
                  placeholder={'Пароль'}
                  required
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <button className='auth__visibility-button' onClick={handleTogglePassword}></button>
              </div>
              <span className='auth__error' id='error'>
                {authText}
              </span>
              <button className='auth__submit-button' type='submit' disabled={isDisabled}>
                Войти
              </button>
            </form>
            <span className='auth__agree'>
            Нажимая «Войти», вы соглашаетесь с {' '}
            <NavLink className='auth__agree-link' to='/'>
              Условиями<br /> использования
            </NavLink>
            &thinsp;и{' '}
            <NavLink className='auth__agree-link' to='/'>
              Политикой конфиденциальности
            </NavLink>{' '}
          </span>
          </div>
          <NavLink className='auth__bottom' to={FORGOT_PASSWORD}>
              Восстановить пароль
            </NavLink>
        </div>
      </div>
      <div className='auth__block auth__block_right'>
        <Slider />
      </div>
    </section>
  );
}

export default Login;

Login.propTypes = {
  onLogin: loginFunctionType,
  resStatus: stringType,
}
