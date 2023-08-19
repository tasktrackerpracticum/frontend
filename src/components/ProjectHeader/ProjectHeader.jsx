import TeamProject from '../TeamProject/TeamProject';
import Deadline from '../Deadline/Deadline.jsx';
//import { useNavigate, useParams } from 'react-router-dom';
//import { useSelector } from 'react-redux';
//import { Fragment } from 'react';
import { objectType } from '../../constatnts/prop-types';

export default function ProjectHeader({ onProject, selectListProject }) {
  // const navigate = useNavigate();
  //const { id } = useParams();
  //const { projects } = useSelector((state) => state.projects);
  //const project = projects.find((item) => item.id === Number(id));

  return (
    <div className='projectHeader'>
      <div className='projectHeader__content'>
        <h2 className='projectHeader__header'>
          {onProject.title ? onProject.title : 'Щелкните по проекту слева'}
          <div
            className={
              onProject.is_active
                ? 'projectHeader__status-actived'
                : 'projectHeader__status-closed'
            }
          >
            {onProject.is_active ? 'Активен' : 'Завершен'}
          </div>
        </h2>
        <div className='projectHeader__container'>
          <p className='projectHeader__projectTimeline'>
            Сроки проекта:{' '}
            <Deadline
              start={onProject.date_start}
              finish={onProject.date_finish}
            />
          </p>
          <div className='projectHeader__team'>
            Команда: <TeamProject users={onProject.users} />
          </div>
        </div>
      </div>

      <button className='projectHeader__button' onClick={selectListProject} />
    </div>

    //   {/* // <Fragment>
    //   //   {project && (
    //   //     <div className='projectHeader'>
    //   //     <div className='projectHeader__content'>
    //   //       <h2 className='projectHeader__header'>
    //   //         {project.title}
    //   //         <div
    //   //           className={
    //   //             project.is_active
    //   //               ? 'projectHeader__status-actived'
    //   //               : 'projectHeader__status-closed'}>
    //   //           {project.is_active ? 'Активен' : 'Завершен'}
    //   //         </div>
    //   //       </h2>
    //   //       <div className='projectHeader__container'>
    //   //         <p className='projectHeader__projectTimeline'>
    //   //           Сроки проекта: <Deadline start={project.date_start} finish= {project.date_finish}/>
    //   //         </p>
    //   //         <div className='projectHeader__team'>Команда: <TeamProject />
    //   //         </div>

    //   //       </div>
    //   //     </div>
    //   //     <button className='projectHeader__button' onClick={() => navigate('/')}/>
    //   //   </div>)}
    //  // </Fragment> */}
  );
}

ProjectHeader.propTypes = {
  onProject: objectType,
  selectListProject: objectType,
};
