import { NavLink } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import { loginFunctionType } from '../../constatnts/prop-types';
import Slider from '../Slider/Slider';
import { SIGN_IN } from '../../constatnts/constants.js';

function Register({ onRegister }) {
  const { values, handleChange } = useValidation();
  function handleSubmit (evt) {
    evt.preventDefault();
    onRegister(values.email, values.password);
  }

  return (
    <section className='auth'>
      <div className='auth__block auth__block_left'>
        <div className='auth__container auth__container_left'>
          <div className='auth__top'>
            <h1 className='auth__name'>Такса</h1>
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
                Зарегистрироваться
              </button>
              <span className='auth__error' id='res-error'>
                Ошибка
              </span>
            </form>
            <NavLink className='auth__link' to='/'>
              Восстановить пароль
            </NavLink>
            <NavLink className='auth__link' to={SIGN_IN}>
              Войти
            </NavLink>
          </div>
          <span className='auth__bottom'>
            Я соглашаюсь с условиями{' '}
            <NavLink className='auth__bottom-link' to='/'>
              Пользовательского соглашения
            </NavLink>
            <br /> и{' '}
            <NavLink className='auth__bottom-link' to='/'>
              Политикой конфиденциальности
            </NavLink>{' '}
            Такса
          </span>
        </div>
      </div>
      <div className='auth__block auth__block_right'>
        <Slider />
      </div>
    </section>
  );
}

export default Register;


Register.propTypes = {
  onRegister: loginFunctionType
}
