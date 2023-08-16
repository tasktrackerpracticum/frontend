import { activeType, objectType } from '../../constatnts/prop-types.js';
import TeamProject from '../TeamProject/TeamProject';
import Deadline from '../Deadline/Deadline.jsx';

export default function ProjectHeader({ onProject, selectListProject }) {

  return (
    
    <div className='projectHeader'>
      <div className='projectHeader__content'>
        <h2 className='projectHeader__header'>
          {onProject.title ? onProject.title : 'Щелкните по проекту слева'}
          <div
            className={
              onProject.is_active
                ? 'projectHeader__status-actived'
                : 'projectHeader__status-closed'}>
            {onProject.is_active ? 'Активен' : 'Завершен'}
          </div>
        </h2>
        <div className='projectHeader__container'>
          <p className='projectHeader__projectTimeline'>
            Сроки проекта: <Deadline start={onProject.date_start} finish= {onProject.date_finish}/>
             
          </p>
          <div className='projectHeader__team'>Команда: <TeamProject />
          </div>
        </div>
      </div>

 
        <button className='projectHeader__button' onClick={selectListProject}/>
    
    </div>
  );
}

ProjectHeader.propTypes = {
  onProject: objectType,
  selectListProject: activeType,
};
