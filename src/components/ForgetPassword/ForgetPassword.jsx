import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useValidation from '../../hooks/useValidation';
import { SIGN_IN } from '../../constatnts/constants.js';
import logo from '../../images/logo.svg';
import arrowback from '../../images/arrow_back.svg';

function ForgetPassword() {
  const [requestSent, setRequestSent, error ] = useState(false);
  const { values, handleChange } = useValidation();
  const { handleForgetPassword } = useAuth();

  const handleRequestSubmit  = (evt) => {
    evt.preventDefault();
    handleForgetPassword(values.email);
    setRequestSent(true)
  };

  const isDisabled = !values.email;

  return (
    <section className='forgetPassword'>
      {requestSent ? (
        <div className='forgetPassword__container'>
          <img className='forgetPassword__logo forgetPassword__logo_request' src={logo} alt='logo' />
          {error !== null ? (
            <span className='forgetPassword__error'>Что-то пошло не так! Попробуйте еще раз, либо напишите в поддержку на почту help@ya.ru</span>
          ) : (
          <span className='forgetPassword__label'>Все прошло успешно! Пароль выслан на почту {values.email}</span>
          )}
          <NavLink to={SIGN_IN}>
            <button className='forgetPassword__submit-button forgetPassword__submit-button_request'>К авторизации</button>
          </NavLink>
        </div>
      ) : (
        <div className='forgetPassword__container'>
          <div className='forgetPassword__top'>
            <NavLink className='forgetPassword__back' to={SIGN_IN}>
              <img src={arrowback} alt='arrowback' />
            </NavLink>
            <img className='forgetPassword__logo' src={logo} alt='logo' />
          </div>
          <form className='forgetPassword__form' onSubmit={handleRequestSubmit}>
            <label className='forgetPassword__label' htmlFor='email'>Для получения пароля<br /> укажите вашу рабочую почту</label>
            <input
              className='forgetPassword__input'
              id='email'
              name='email'
              type='email'
              value={values.email || ''}
              placeholder={'Email'}
              required
              onChange={handleChange}
            />
            <button className='forgetPassword__submit-button' type='submit' disabled={isDisabled}>
              Запросить пароль
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default ForgetPassword;