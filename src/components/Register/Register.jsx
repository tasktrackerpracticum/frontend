import { NavLink } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import { loginFunctionType } from '../../constatnts/prop-types';

function Register({ onRegister }) {
  const { values, handleChange } = useValidation();
  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values.email, values.password);
  }

  return (
    <section className='auth'>
      <div className='auth__block'>
        <div className='auth__container'>
          <div className='auth__top'>
            <span className='auth__name'>Такса</span>
            <form className='auth__form' onSubmit={handleSubmit}>
              <h1 className='auth__title'>Регистрация</h1>
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
              <div className='auth__password'>
                <input
                  className='auth__input auth__input_type_password'
                  id='password'
                  name='password'
                  type='password'
                  value={values.password || ''}
                  placeholder={'Пароль'}
                  required
                  minLength='8'
                  onChange={handleChange}
                />
                <button className='auth__hide-button'></button>
              </div>
              <span className='auth__error' id='password-error'>
                Ошибка
              </span>
              <button className='auth__submit-button' type='submit'>
                Зарегистрироваться
              </button>
              <input
                className='auth__input auth__input_type_remember'
                type='radio'
                id='remember'
                name='remember'
              />
              <label className='auth__remember-text' htmlFor='remember'>
                Запомнить меня на этом компьютере
              </label>
              <span className='auth__error' id='res-error'>
                Ошибка
              </span>
              <NavLink className='auth__link' to='/login'>
                У вас уже есть аккаунт?
              </NavLink>
            </form>
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
      <div className='auth__image'></div>
    </section>
  );
}

export default Register;


Register.propTypes = {
  onRegister: loginFunctionType
}