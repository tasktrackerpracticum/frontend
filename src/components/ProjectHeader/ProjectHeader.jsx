import TeamProject from '../TeamProject/TeamProject';
import Deadline from '../Deadline/Deadline.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';

export default function ProjectHeader() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { projects } = useSelector((state) => state.projects);
  const project = projects.find((item) => item.id === Number(id));
  const creator = project?.users.find((item) => item.role == 'pm');

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
                    : 'projectHeader__status-closed'
                }
              >
                {project.is_active ? 'Активен' : 'Завершен'}
              </div>
            </h2>
            <div className="projectHeader__description">+ Описание</div>
            <div className='projectHeader__container'>
              <p className='projectHeader__projectTimeline'>
                <Deadline
                  start={project.date_start}
                  finish={project.date_finish}
                />
              </p>
              <div className='projectHeader__container-creator'>
                Автор:
                <div className='projectHeader__creator'>
                  {creator.photo ? (
                    <AvatarPic pic={creator?.user?.photo} size={24} />
                  ) : (
                    <AvatarLetter
                      nameUser={creator?.user?.first_name}
                      surnameUser={creator?.user?.last_name}
                      size={32}
                      fzie={10}
                    />
                  )}
                  <div className='projectHeader__creator-name'>
                    {creator?.user?.first_name} {creator?.user?.last_name}
                  </div>
                </div>
              </div>
              <div className='projectHeader__team'>
                Команда: <TeamProject users={project.users} />
              </div>
            </div>
          </div>
          <button
            className='projectHeader__button'
            onClick={() => navigate('/')}
          />
        </div>
      )}
    </Fragment>
  );
}
