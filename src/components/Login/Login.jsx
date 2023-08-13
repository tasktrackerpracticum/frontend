import { NavLink } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import { loginFunctionType } from '../../constatnts/prop-types';
import Slider from '../Slider/Slider';
import logo from '../../images/logo.svg';

function Login({ onLogin }) {
  const { values, handleChange } = useValidation();
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values.email, values.password);
  };
  
  return (
    <section className='auth'>
      <div className='auth__block auth__block_left'>
        <div className='auth__container auth__container_left'>
          <div className='auth__top'>
            <NavLink to='/' className='auth__logo-container'>
              <img className='auth__logo' src={logo} alt='logo' />
              <h1 className='auth__title'>Лого</h1>
            </NavLink>
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
              <span className='auth__error' id='email-error'>
                Ошибка
              </span>
              <input
                className='auth__input auth__input_type_password'
                id='password'
                name='password'
                type='password'
                value={values.password || ''}
                placeholder={'Пароль'}
                required
                onChange={handleChange}
              />
              <span className='auth__error' id='password-error'>
                Ошибка
              </span>
              <button className='auth__submit-button' type='submit'>
                Войти
              </button>
              <span className='auth__error' id='res-error'>
                Ошибка
              </span>
            </form>
            <span className='auth__agree'>
            Нажимая «Войти», вы соглашаетесь с {' '}
            <NavLink className='auth__agree-link' to='/'>
              Условиями<br /> использования 
            </NavLink>
            и {' '}
            <NavLink className='auth__agree-link' to='/'>
              Политикой конфиденциальности
            </NavLink>{' '}
          </span>
          </div>
          <NavLink className='auth__bottom' to='/'>
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
  onLogin: loginFunctionType
}
