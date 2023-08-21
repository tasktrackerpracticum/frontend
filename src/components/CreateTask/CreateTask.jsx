import { useState } from 'react';
import { boolType, functionType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, createNewTask } from '../../services/tasksSlice';
import avatar from '../../images/user-avatar-profile.png';
import Select from '../Select/Select';
import { useLocation } from 'react-router-dom';

function CreateTask({ active, setActive }) {
  const [isActiveListPerformer, setActliveListPerformer] = useState(false);
  const [title, setTitle] = useState();
  const [deadline, setDeadline] = useState('');
  const [disabled, setDisabled] = useState(true);

  const todayDate = new Date(); 
  const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}`:todayDate.getDate();
  const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth()}`: todayDate.getMonth();
  const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');
  const currentDate = formattedDate;

  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const location = useLocation();
  const projectId = parseInt(location.pathname.match(/\d+/));

  const handleAction = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, deadline }));
    dispatch(createNewTask({ title, deadline, projectId }));
    setActive(!active);
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    if (event.target.value !== title) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setTitle(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    event.preventDefault();
    if (event.target.value !== deadline) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setDeadline(event.target.value);
  };

  const toggleListPerformer = () => {
    setActliveListPerformer(!isActiveListPerformer);
  };

  return (
    <section className={active ? 'createTask__active' : 'createTask'}>
      <div className='createTask__wrap'>
        <div className='createTask__info-content'>
          <input
            className='createTask__title'
            value={title || ''}
            onChange={handleTitleChange}
            id='title-input'
            type='text'
            placeholder='Новая задача'
            name='title'
            required
          />
        </div>
        <button
          className='createTask__cancel-btn'
          onClick={() => setActive(!active)}>
        </button>
      </div>

      <div className='createTask__content'>
        <form className='createTask__info'>
          <div className='createTask__container'>
            <h2 className='createTask__subtitle'>Дата начала</h2>
            <input
              className='createTask__input'
              value={currentDate}
              id='date-begin-input'
              type='date'
              placeholder='Дата начала'
              name='date_start'
              required
            />
          </div>
          <div className='createTask__container'>
            <h2 className='createTask__subtitle'>Дата окончания</h2>
            <input
              className='createTask__input'
              value={deadline}
              onChange={handleDeadlineChange}
              id='deadline-input'
              type='date'
              placeholder='Дата окончания'
              name='date_finish'
              required
            />
          </div>
          <div className='createTask__container-creator'>
            <h2 className='createTask__subtitle'>Автор</h2>
            <div className='createTask__creator'>
              <img
                src={currentUser.photo !== '' ? avatar : currentUser.photo}
                className='createTask__creator-avatar'
                alt='avatar'
              />
              <div className='createTask__creator-name'>
                {currentUser.first_name} {currentUser.last_name}
              </div>
            </div>
          </div>
          <div className='createTask__container'>
            <h2 className='createTask__subtitle'>Исполнитель</h2>
            <div className="createTask__performer" onClick={toggleListPerformer}>
              <div className="createTask__add-performer"> + Добавить</div>
              <Select isActiveListPerformer={isActiveListPerformer}
            setActliveListPerformer={setActliveListPerformer}/>
            </div>
          </div>
          <div className='createTask__container-btn'>
            <button
              disabled={disabled}
              className='createTask__submit-btn'
              type='submit'
              onClick={handleAction}
            >
              + Создать задачу
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateTask;

CreateTask.propTypes = {
  active: boolType,
  setActive: functionType,
};
