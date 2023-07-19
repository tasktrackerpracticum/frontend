import { activeType, objectType } from '../../constatnts/prop-types.js';

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
                : 'project__status-closed'}>
            {onProject.is_active ? 'Активен' : 'Завершен'}
          </div>
        </h2>
        <div className='projectHeader__container'>
          <p className='projectHeader__projectTimeline'>
            Сроки проекта: {onProject.date_start} - {onProject.date_finish}
          </p>
          <p className='projectHeader__team'>Команда:</p>
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
