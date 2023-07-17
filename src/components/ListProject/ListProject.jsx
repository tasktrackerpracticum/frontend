import { useDispatch, useSelector } from 'react-redux';
import { openFunctionType } from '../../constatnts/prop-types';
import { useEffect } from 'react';
import { fetchProjects } from '../../services/projectsSlice.js';

export default function ListProject({ isOpen, setOpen }) {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);


  const openTaskCreate = () => {
    setOpen(!isOpen);
  };


  return (
    <section className='listProject'>
      <div className='listProject__create'>
        <button
          className='listProject__create-btn'
          onClick={openTaskCreate}
        ></button>
      </div>
      {status === 'loading' && <h2>loading...</h2>}{' '}
      {/* потом добавить спиннер и убрать */}
      {error && <h2>{error}</h2>} {/* потом добавить модалку ошибки и убрать */}
      <div className='listProject__content'>
        {/* потом добавить компонент вместо вставки разметки. Либо сделать на роуте со списком проектов с модалкой справа, чтобы не запрашивать список проектов */}

        {projects.length !== 0 &&
          projects.map((item) => {
            return (
              <div key={item.id} className='listProject__container'>
                <div className='listProject__project-title'>{item.title}</div>
                <div className='listProject__project-info'>
                  <div className='listProject__project-time'>
                    16.06.2023-16.06.2023
                  </div>
                  <div className='listProject__wrap'>
                    <div className='listProject__project-member'>...</div>

                    <div className='listProject__project-status'>Активен</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

ListProject.propTypes = {
  isOpen: openFunctionType,
  setOpen: openFunctionType,
};
