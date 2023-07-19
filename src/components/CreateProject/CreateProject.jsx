import { useState } from "react";
import useValidation from '../../hooks/useValidation';
import { activeType, functionType } from '../../constatnts/prop-types';

function CreateProject({ active, setActive }) {
  const { values, handleChange } = useValidation();
  const [title, setTitle] = useState();


  


  return (
    <section className={active ? 'createProject__active' : 'createProject'}>
      <div className='createProject__wrap'>
        <div className='createProject__info-content'>
          <h1 className='createProject__title'>Новый Проект</h1>
        </div>
		<button
            className='createProject__cancel-btn'
            onClick={() => setActive(!active)}
          >
          </button>
      </div>

      <div className='createProject__content'>
        <div className='createProject__info'>
        <div className='createProject__container'>
            <h2 className='createProject__subtitle'>Название проекта</h2>
            <input
              className='createProject__input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id='date-begin-input'
              type='text'
              placeholder='Название проекта'
              name='title'
              required
            />
          </div>
          <div className='createProject__container'>
            <h2 className='createProject__subtitle'>Дата начала</h2>
            <input
              className='createProject__input'
              value={values.date_start}
              onChange={handleChange}
              id='date-begin-input'
              type='date'
              placeholder='Дата начала'
              name='date_start'
              required
            />
          </div>
          <div className='createProject__container'>
            <h2 className='createProject__subtitle'>Дата окончания</h2>
            <input
              className='createProject__input'
              value={values.date_finish}
              onChange={handleChange}
              id='date-end-input'
              type='date'
              placeholder='Дедлайн'
              name='date_finish'
              minLength='9'
              maxLength='11'
              required
            />
          </div>
          <div className='createProject__container'>
            <h2 className='createProject__subtitle'>Автор</h2>
            <input
              className='createProject__input'
              value={values.author}
              onChange={handleChange}
              id='author-input'
              type='text'
              placeholder='Создатель проекта'
              name='text'
              minLength='5'
              maxLength='20'
              required
            />
          </div>
          <div className='createProject__container'>
            <h2 className='createProject__subtitle'>Исполнитель</h2>
            <input
              className='createProject__input'
              value={values.performer}
              onChange={handleChange}
              id='performer-input'
              type='text'
              placeholder='Добавить исполнителя'
              name='performer'
              required
            />
          </div>
        </div>

        <div className='createProject__container-btn'>
          <button className='createProject__submit-btn' type='submit' >
            + Создать проект
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateProject;

CreateProject.propTypes = {
  active: activeType,
  setActive: activeType,
  addProject: functionType
};
