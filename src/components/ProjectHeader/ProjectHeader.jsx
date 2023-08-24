import TeamProject from '../TeamProject/TeamProject';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

export default function ProjectHeader() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { projects } = useSelector((state) => state.projects);
  const project = projects.find((item) => item.id === Number(id));

  return (
    <Fragment>
      {project && (
        <div className='projectHeader'>
          <div className='projectHeader__content'>
            <h2 className='projectHeader__header'>
              {project.title}
              <div
                className={
                  project.is_active
                    ? 'projectHeader__status-actived'
                    : 'projectHeader__status-closed'}>
                {project.is_active ? 'Активен' : 'Завершен'}
              </div>
            </h2>
            <button className='projectHeader__button-description'>+ Добавить описание</button>
            <div className='projectHeader__container'>
              <p className='projectHeader__projectTimeline'>
                Начало: <span className='projectHeader__projectDate'>{project.date_start ? project.date_start.split("-").reverse().join("-").replaceAll("-", ".") : '---'}</span>
              </p>
              <p className='projectHeader__projectTimeline'>
                Дедлайн: <span className='projectHeader__projectDate'>{project.date_finish ? project.date_finish.split("-").reverse().join("-").replaceAll("-", ".") : '---'}</span>
              </p>
              <div className='projectHeader__team'>Команда: <TeamProject /></div>
            </div>
          </div>
        <button className='projectHeader__button' onClick={() => navigate('/')}/>
      </div>)}
    </Fragment>
  );
}

