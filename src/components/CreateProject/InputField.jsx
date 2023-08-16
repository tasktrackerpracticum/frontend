import { useState } from 'react';
import InputSelect from '../InputSelect/InputSelect';
import avatar from '../../images/user-avatar-profile.png';
import { useFormContext } from 'react-hook-form';
import { activeType, boolType } from '../../constatnts/prop-types';
import { useSelector } from 'react-redux';

function InputField({ active, setActive }) {
  const currentUser = useSelector((state) => state.user.user);
  const performers = useSelector(
    (state) => state.projects.listUsersToCreateProject,
  );

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [date_start, setDateStart] = useState('');
  const [date_finish, setDateFinish] = useState('');
  const [isOpenSelectPerformer, setOpenSelectPerformer] = useState(false);
  const [isHiddenPerformers, setHiddenPerformers] = useState(true);


  function openInputSelect() {
    setOpenSelectPerformer(!isOpenSelectPerformer);
  }

  const isHide = () => {
  
    setHiddenPerformers(!isHiddenPerformers);
  }

  const handleNameChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();

    setDescription(event.target.value);
  };
  const handleDateStartChange = (event) => {
    event.preventDefault();
    setDateStart(event.target.value);
  };
  const handleDateFinishChange = (event) => {
    event.preventDefault();
    setDateFinish(event.target.value);
  };


  return (
    <section className='createProject__input-fields'>
      <div className='createProject__wrap'>
        <div className='createProject__info-content'>
          <input
            className='createProject__title'
            value={title}
            onChange={handleNameChange}
            type='text'
            placeholder='Название проекта'
            {...register('title', {
              required: 'Это поле обязательное',
              maxLength: {
                value: 15,
                message: `Должно быть не больше 15 символов`,
              },
              minLength: {
                value: 1,
                message: `Должно быть не больше 1 символов`,
              },
            })}
          />
          <span className='createProject__errors'>
            {errors?.title?.message}
          </span>
        </div>
        <button
          className='createProject__cancel-btn'
          onClick={() => setActive(!active)}
        ></button>
      </div>

      <div className='createProject__content'>
        <div className='createProject__info'>
          <div className='createProject__container-description'>
            <textarea
              className='createProject__input-description'
              value={description}
              onChange={handleDescriptionChange}
              type='text'
              placeholder='+ Добавить описание'
              {...register('description', {
                required: false,
                maxLength: {
                  value: 150,
                  message: `Должно быть не больше 150 символов`,
                },
              })}
            />
          </div>

     
            <div className='createProject__container'>
            <h2 className='createProject__subtitle'>Дата начала</h2>
            <input
              className='createProject__input'
              value={date_start || ''}
              type='date'
              placeholder='-----'
              {...register('date_start', {
                required: false,
              })}
              onChange={handleDateStartChange}
            />
          </div>
       

      
        
          <div className='createProject__container'>
            <h2 className='createProject__subtitle'>Дата окончания</h2>
            <input
              className='createProject__input'
              value={date_finish}
              type='date'
              placeholder='-----'
              {...register('date_finish', {
                required: false,
              })}
              onChange={handleDateFinishChange}
            />
          </div>
          <div className='createProject__container-creator'>
            <h2 className='createProject__subtitle'>Автор</h2>
            <div className='createProject__creator'>
              <img
                src={currentUser.photo == '' ? avatar : currentUser.photo}
                className='createProject__creator-avatar'
                alt='avatar'
              />
              <div className='createProject__creator-name'>
                {currentUser.first_name} {currentUser.last_name}
              </div>
            </div>
          </div>

          {isOpenSelectPerformer ? (
            <InputSelect
              isOpen={openInputSelect}
              title={'Исполнитель'}
              inputType={'peroformers'}
              register={register}
              dataType={'peroformers'}
            />
          ) : (
            <div className='createProject__container'>
              <h2 className='createProject__subtitle'>Исполнитель</h2>
              <div
                className='createProject__performer'
                onClick={openInputSelect}
              >
                <div className='createProject__performer-edit-icon' />
                <div className='createProject__performer-text'>
                  Добавить исполнителя
                </div>
              </div>
            </div>
          )}
          <div className='createProject__list-performers-container'>
            <div className='createProject__list-performers'>
              {performers.slice(0, isHiddenPerformers ? 3 : performers.length).map((item) => {
                return (
                  <div key={item.id} className='createProject__user'>
                    <img
                      className='createProject__performer-user-avatar'
                      src={item.photo}
                    />
                    <div className='createProject__performer-text'>
                      {item.first_name} {item.last_name}
                    </div>
                  </div>
                );
              })}
            </div>
         
          </div>
          {(performers.length == 0 || performers.length < 4) ? (
              ''
            ) : (
              <div className='createProject__hidden-performers' onClick={isHide}>
                <div className="createProject__hidden-border" />
                <div className="createProject__hidden-text">
                  
                  <div className={isHiddenPerformers ? 'createProject__hidden-arrow' : 'createProject__hidden-arrow_less'} />
                  Развернуть список ({isHiddenPerformers ? performers.length : 0}){' '}
                  </div>
                  <div className="createProject__hidden-border" />
             
               
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

export default InputField;

InputField.propTypes = {
  active: boolType,
  setActive: activeType,
};
