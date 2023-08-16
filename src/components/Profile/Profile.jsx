import avatar from '../../images/user-avatar-profile.png';
import { activeType, setActiveType, boolType, functionType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserMe, updateUserMe } from '../../services/userSlice';
import InputForm from '../InputForm/InputForm';
import { useForm } from 'react-hook-form';

function Profile({ active, setActive, openModalAvatar }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUserMe());
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    handleActionChange(data);
    closeInput();
  };

  function handleActionChange(data) {
    dispatch(updateUserMe({ data }));
  }

  const [isOpenPoisitionInput, setOpenPositionInput] = useState(false);
  const [isOpenPhoneInput, setOpenPhoneInput] = useState(false);
  const [isOpenEmailInput, setOpenEmailInput] = useState(false);
  const [isOpenTimezoneInput, setOpenTimezoneInput] = useState(false);
  const [isOpenTelegramInput, setOpenTelegramInput] = useState(false);

  function openInputPosition() {
    setOpenPositionInput(!isOpenPoisitionInput);
  }
  function openInputPhone() {
    setOpenPhoneInput(!isOpenPhoneInput);
  }
  function openInputEmail() {
    setOpenEmailInput(!isOpenEmailInput);
  }
  function openInputTimezone() {
    setOpenTimezoneInput(!isOpenTimezoneInput);
  }
  function openInputTelegram() {
    setOpenTelegramInput(!isOpenTelegramInput);
  }

  function closeInput() {
    setOpenTelegramInput(false),
      setOpenTimezoneInput(false),
      setOpenEmailInput(false),
      setOpenPhoneInput(false),
      setOpenPositionInput(false);
  }

  return (
    <section className={active ? 'profile__active' : 'profile'}>
      <div className='profile__wrap'>
        <div
          className='profile__avatar-overlay'
          onClick={openModalAvatar}
        ></div>
        <img
          src={currentUser.photo ? currentUser.photo : avatar}
          alt='место для аватара'
          className='profile__avatar'
        />

        <div className='profile__info-content'>
          <h1 className='profile__title'>
            {currentUser.first_name} {currentUser.last_name}
          </h1>
          <h2 className='profile__date'>{currentUser.date_of_birth}</h2>
        </div>
        <button
          className='profile__cancel-btn'
          onClick={() => setActive(!active)}
        ></button>
      </div>

      <form className='profile__content' onSubmit={handleSubmit(onSubmit)}>
        <div className='profile__info'>
          {isOpenPoisitionInput ? (
            <InputForm
              isOpen={openInputPosition}
              value={currentUser.position}
              title={'Должность'}
              inputType={'text'}
              register={register}
              dataType={'position'}
              isMaxLength={'15'}
              isMinLength={'5'}
              errors={errors}
            />
          ) : (
            <div className='profile__container' onClick={openInputPosition}>
              <h2 className='profile__subtitle'>Должность:</h2>
              <div className='profile__input'>{currentUser.position}</div>
            </div>
          )}
          {isOpenPhoneInput ? (
            <InputForm
              isOpen={openInputPhone}
              value={currentUser.phone}
              title={'Телефон'}
              inputType={'tel'}
              register={register}
              dataType={'phone'}
              errors={errors}
              isMaxLength={'12'}
              isMinLength={'12'}
            />
          ) : (
            <div className='profile__container' onClick={openInputPhone}>
              <h2 className='profile__subtitle'>Телефон:</h2>
              <div className='profile__input'>{currentUser.phone}</div>
            </div>
          )}

          {isOpenEmailInput ? (
            <InputForm
              isOpen={openInputEmail}
              value={currentUser.email}
              title={'Email'}
              inputType={'email'}
              register={register}
              dataType={'email'}
              errors={errors}
              isMaxLength={15}
              isMinLength={5}
            />
          ) : (
            <div className='profile__container' onClick={openInputEmail}>
              <h2 className='profile__subtitle'>Email:</h2>
              <div className='profile__input'>{currentUser.email}</div>
            </div>
          )}

          {isOpenTelegramInput ? (
            <InputForm
              isOpen={openInputTelegram}
              value={currentUser.telegram}
              title={'Telegram'}
              inputType={'text'}
              register={register}
              dataType={'telegram'}
              errors={errors}
            />
          ) : (
            <div className='profile__container' onClick={openInputTelegram}>
              <h2 className='profile__subtitle'>Telegram:</h2>
              <div className='profile__input'>{currentUser.telegram}</div>
            </div>
          )}

          {isOpenTimezoneInput ? (
            <InputForm
              isOpen={openInputTimezone}
              value={currentUser.timezone}
              title={'Часовой пояс'}
              inputType={'text'}
              register={register}
              dataType={'timezone'}
              errors={errors}
            />
          ) : (
            <div className='profile__container' onClick={openInputTimezone}>
              <h2 className='profile__subtitle'>Часовой пояс:</h2>
              <div className='profile__input'>{currentUser.timezone}</div>
            </div>
          )}
        </div>

        <div className='profile__container-check'>
          <input
            type='checkbox'
            id='check-input'
            name='check'
            className='profile__input-check'
          />
          <label htmlFor='check-input' className='profile__check-email'>
            {' '}
            Получать уведомления в Telegram
          </label>
        </div>
        <div className='profile__container-btn'>
          <button
            className='profile__submit-btn'
            type='submit'
            onClick={handleActionChange}
          >
            Сохранить изменения
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;

Profile.propTypes = {
  active: activeType,
  setActive: setActiveType,
  openModalAvatar: functionType,
};
