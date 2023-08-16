import TeamProject from '../TeamProject/TeamProject';
import Deadline from '../Deadline/Deadline.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

export default function ProjectHeader() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { projects } = useSelector(state => state.projects);
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
          <div className='projectHeader__container'>
            <p className='projectHeader__projectTimeline'>
              Сроки проекта: <Deadline start={project.date_start} finish= {project.date_finish}/>
            </p>
            <div className='projectHeader__team'>Команда: <TeamProject />
            </div>
          </div>
        </div>
        <button className='projectHeader__button' onClick={() => navigate('/')}/>
      </div>)}
    </Fragment>
  );
}
