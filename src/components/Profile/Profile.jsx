import avatar from '../../images/user-avatar-profile.png';
import useValidation from '../../hooks/useValidation';
import { activeType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserMe } from '../../services/usersSlice';

function Profile({ active, setActive }) {
  const { values, handleChange } = useValidation();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.users);
  console.log(currentUser);


  useEffect(() => {
    dispatch(fetchUserMe());
  }, [dispatch]);



  return (
    <section className={active ? 'profile__active' : 'profile'}>
      <div className='profile__wrap'>
        <img src={avatar} alt='место для аватара' className='profile__avatar'/>
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

      <div className='profile__content'>
        <div className='profile__info'>
          <div className='profile__container'>
            <h2 className='profile__subtitle'>Должность:</h2>
            <input
              className='profile__input'
              value={values.work}
              onChange={handleChange}
              id='work-input'
              type='text'
              placeholder={currentUser.position}
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
              value={values.phone}
              onChange={handleChange}
              id='phone-input'
              type='number'
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
              value={values.email}
              onChange={handleChange}
              id='email-input'
              type='email'
              placeholder={currentUser.email}
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
              value={values.timezone}
              onChange={handleChange}
              id='timezone-input'
              type='text'
              placeholder={currentUser.timezone}
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
          <button className='profile__submit-btn' type='submit' onClick={() => setActive(!active)}>
            Сохранить изменения
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;

Profile.propTypes = {
  active: activeType,
  setActive: activeType,
};
