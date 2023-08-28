import { useState } from 'react';
import InputSelect from '../InputSelect/InputSelect';
import { useFormContext } from 'react-hook-form';
import { activeType, boolType, stringType } from '../../constatnts/prop-types';
import { useSelector } from 'react-redux';
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';
import Input from './Input';

function InputField({ active, setActive, inputPlaceholder, isCreateTask }) {
  const currentUser = useSelector((state) => state.user.user);
  const performers = useSelector(
    (state) => state.projects.listUsersToCreateProject,
  );

  const {
    watch,
    register,
    reset,
    formState: { errors },
  } = useFormContext();

  const form = watch();

  // console.log(form)

  const [title, setTitle] = useState();
  const [description, setDescription] = useState('+ Добавить описание');

  const [date_start, setDateStart] = useState();
  const [date_finish, setDateFinish] = useState();
  const [isOpenSelectPerformer, setOpenSelectPerformer] = useState(false);
  const [isHiddenPerformers, setHiddenPerformers] = useState(true);

  function openInputSelect() {
    setOpenSelectPerformer(!isOpenSelectPerformer);
  }

  const isHide = () => {
    setHiddenPerformers(!isHiddenPerformers);
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();

    setDescription(event.target.value);
    openInputDescription();
  };

  const handleDateStartChange = (event) => {
    event.preventDefault();
    setDateStart(event.target.value);
    openInputDateStart();
  };
  const handleDateFinishChange = (event) => {
    event.preventDefault();
    setDateFinish(event.target.value);
    openInputDateFinish();
  };

  const closeModal = (event) => {
    event.preventDefault();
    setActive(!active);
    reset();
  };

  const [openDescriptionInput, setOpenDescriptionInput] = useState(false);
  const [openDateStartInput, setOpenDateStartInput] = useState(false);
  const [openDateFinishInput, setOpenDateFinishInput] = useState(false);

  function openInputDescription() {
    setOpenDescriptionInput(!openDescriptionInput);
  }

  function openInputDateStart() {
    setOpenDateStartInput(!openDateStartInput);
  }
  function openInputDateFinish() {
    setOpenDateFinishInput(!openDateFinishInput);
  }

  return (
    <section className='createProject__input-fields'>
      <div className='createProject__wrap'>
        <div className='createProject__info-content'>
          <input
            className='createProject__title'
            value={title}
            onChange={handleNameChange}
            type='text'
            placeholder={inputPlaceholder ? inputPlaceholder : 'Название'}
            {...register('title', {
              required: 'Это поле обязательное',
              maxLength: {
                value: isCreateTask ? 50 : 15,
                message: isCreateTask ? `Должно быть не больше 50 символов` : `Должно быть не больше 15 символов`,
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
          onClick={closeModal}
        ></button>
      </div>

      <div className='createProject__content'>
        <div className='createProject__info'>
          {openDescriptionInput ? (
            <Input
              isOpen={openInputDescription}
              value={description}
              title={'Описание проекта'}
              inputType={'text'}
              register={register}
              dataType={'description'}
              isMaxLength={500}
              isMinLength={5}
              errors={errors}
              handleChange={handleDescriptionChange}
            />
          ) : (
            <div
              className='createProject__container-description'
              onClick={openInputDescription}
            >
              <h2 className='createProject__subtitle'>
                {form.description !== '' ? form.description : description}
              </h2>
            </div>
          )}

          {openDateStartInput ? (
            <Input
              isOpen={openInputDateStart}
              value={date_start}
              title={'Описание проекта'}
              inputType={'date'}
              register={register}
              dataType={'date_start'}
              errors={errors}
              handleChange={handleDateStartChange}
            />
          ) : (
            <div
              className='createProject__container'
              onClick={openInputDateStart}
            >
              <h2 className='createProject__subtitle'>Дата начала</h2>
              <div className='createProject__input'>
                {form.date_start !== null ? form.date_start : '— — — —'}
              </div>
            </div>
          )}

          {openDateFinishInput ? (
            <Input
              isOpen={openInputDateFinish}
              value={date_finish}
              title={'Описание проекта'}
              inputType={'date'}
              register={register}
              dataType={'date_finish'}
              errors={errors}
              handleChange={handleDateFinishChange}
            />
          ) : (
            <div
              className='createProject__container'
              onClick={openInputDateFinish}
            >
              <h2 className='createProject__subtitle'>Дата окончания</h2>
              <div className='createProject__input'>
              {form.date_finish !== null ? form.date_finish : '— — — —'}
              </div>
            </div>
          )}

          <div className='createProject__container-creator'>
            <h2 className='createProject__subtitle createProject__subtitle_type_creator'>Автор</h2>
            <div className='createProject__creator'>
              {currentUser.photo ? (
                <AvatarPic pic={currentUser.photo} size={24} />
              ) : (
                <AvatarLetter
                  nameUser={currentUser.first_name}
                  surnameUser={currentUser.last_name}
                  size={24}
                  fzie={10}
                />
              )}
              <p className='createProject__creator-name'>Я</p>
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
                {/* <div className='createProject__performer-edit-icon' /> */}
                <div className='createProject__performer-text'>
                  + Добавить
                </div>
              </div>
            </div>
          )}

          {isOpenSelectPerformer == false && (
            <div className='createProject__list-performers-container'>
              <div className='createProject__list-performers'>
                {performers
                  .slice(0, isHiddenPerformers ? 3 : performers.length)
                  .map((item) => {
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
          )}

          {performers.length == 0 || performers.length < 4 ? (
            ''
          ) : (
            <div className='createProject__hidden-performers' onClick={isHide}>
              <div className='createProject__hidden-border' />
              <div className='createProject__hidden-text'>
                <div
                  className={
                    isHiddenPerformers
                      ? 'createProject__hidden-arrow'
                      : 'createProject__hidden-arrow_less'
                  }
                />
                Развернуть список ({isHiddenPerformers ? performers.length : 0}){' '}
              </div>
              <div className='createProject__hidden-border' />
            </div>
          )}
        </div>
        {isCreateTask && (
          <>
          <h2>Чек лист</h2>
          <h2>Комментарии</h2>
          </>
        )}
      </div>
    </section>
  );
}

export default InputField;

InputField.propTypes = {
  active: boolType,
  setActive: activeType,
  inputPlaceholder: stringType,
  isCreateTask: boolType
};
