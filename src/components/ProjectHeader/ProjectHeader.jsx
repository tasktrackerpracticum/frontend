import '../../scss/components/projectHeader.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchProjects } from '../../services/projectsSlice';

export default function ProjectHeader() {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className='projectHeader'>
      {status === 'loading' && <h2>loading...</h2>}{' '}
      {/* потом добавить спиннер и убрать */}
      {error && <h2>{error}</h2>} {/* потом добавить модалку ошибки и убрать */}
      {projects.length !== 0 &&
        projects.map((item) => {
          if (item.id == 1) {
          return ( 
          <div key={item} className='projectHeader__content'>
            <h2 className='projectHeader__header'>
              {item.title}
              <span className='projectHeader__status'>Активен</span>
            </h2>
            <div className='projectHeader__container'>
              <p className='projectHeader__projectTimeline'>
                Сроки проекта: {item.date_start} - {item.date_finish}
              </p>
              <p className='projectHeader__team'>Команда:</p>
            </div>
          </div>
          )
        }
        })}
      <NavLink to='/project'>
        <button className='projectHeader__button' />
      </NavLink>
    </div>
  );
}
