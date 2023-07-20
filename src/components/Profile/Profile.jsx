import avatar from '../../images/user-avatar-profile.png';
import { activeType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserMe, updateUser } from '../../services/usersSlice';

function Profile({ active, setActive }) {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.users);
  
  useEffect(() => {
    dispatch(fetchUserMe());
  }, [dispatch]);

  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');
  const [timezone, setTimezone] = useState('');

  function handlePositionChange(evt) {
    evt.preventDefault();
    if (evt.target.value !== currentUser.position) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setPosition(evt.target.value);
  }
  function handlePhoneChange(evt) {
    evt.preventDefault();
    if (evt.target.value !== currentUser.phone) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setPhone(evt.target.value);
  }
  function handleTimezoneChange(evt) {
    evt.preventDefault();
    if (evt.target.value !== currentUser.timezone) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    
    setTimezone(evt.target.value);
  }
  function handleEmailChange(evt) {
    evt.preventDefault();
    if (evt.target.value !== currentUser.email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setEmail(evt.target.value);
  }

  function handleActionChange(evt) {
    evt.preventDefault();
  dispatch(updateUser({position, timezone, email, phone}))
    setActive(!active);
  }

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (currentUser.position && currentUser.phone && currentUser.email) {
      setPosition(currentUser.position);
      setPhone(currentUser.phone);
      setEmail(currentUser.email);
      setTimezone(currentUser.timezone)
    }
  }, [currentUser.position, currentUser.phone, currentUser.email, currentUser.timezone])

  


  return (
    <section className={active ? 'profile__active' : 'profile'}>
      <div className='profile__wrap'>
        <img src={currentUser.photo !== '' ? avatar: currentUser.photo } alt='место для аватара' className='profile__avatar'/>
        <div className='profile__info-content'>
          <h1 className='profile__title'>{currentUser.username} {currentUser.first_name} {currentUser.last_name}</h1>
          <h2 className='profile__date'>{currentUser.date_of_birth}</h2>
        </div>
		<button
            className='profile__cancel-btn'
            onClick={() => setActive(!active)}
          >
          </button>
      </div>

      <form className='profile__content'>
        <div className='profile__info'>
          <div className='profile__container'>
            <h2 className='profile__subtitle'>Должность:</h2>
            <input
              className='profile__input'
              value={position}
              onChange={handlePositionChange}
              id='position-input'
              type='text'
              name='work'
              minLength='2'
              maxLength='10'
              required
            />
          </div>
          <div className='profile__container'>
            <h2 className='profile__subtitle'>Телефон:</h2>
            <input
              className='profile__input'
              value={phone}
              onChange={handlePhoneChange}
              id='phone-input'
              type='tel'
              placeholder={currentUser.phone}
              name='phone'
              minLength='9'
              maxLength='11'
              required
            />
          </div>
          <div className='profile__container'>
            <h2 className='profile__subtitle'>Email:</h2>
            <input
              className='profile__input'
              value={email}
              onChange={handleEmailChange}
              id='email-input'
              type='email'
              name='email'
              minLength='7'
              maxLength='20'
              required
            />
          </div>
          <div className='profile__container'>
            <h2 className='profile__subtitle'>Часовой пояс:</h2>
            <input
              className='profile__input'
              value={timezone}
              onChange={handleTimezoneChange}
              id='timezone-input'
              type='text'
              name='timezone'
              required
            />
          </div>
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
            Уведомление на почту
          </label>
        </div>

        <div className='profile__container-btn'>
          <button disabled={disabled} className='profile__submit-btn' type='submit' onClick={handleActionChange}>
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
  setActive: activeType,
};
