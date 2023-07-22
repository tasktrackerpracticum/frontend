import { stringType, boolType } from '../../constatnts/prop-types';
import TeamProject from '../TeamProject/TeamProject';
import Deadline from '../Deadline/Deadline';

export default function PostProject({ title, is_active, start, finish }) {
  return (
    <form className='postProject'>
      <div className='postProject__project-title'>{title}</div>
      <div className='postProject__project-info'>
        <div className='postProject__project-time'>
         <Deadline start={start} finish={finish} />
        </div>
        <div className='postProject__wrap'>
          <div className='postProject__project-member'>
          <TeamProject />
          </div>
          <div
            className={
              is_active
                ? 'postProject__project-status-actived'
                : 'postProject__project-status-closed'
            }
          >
            {is_active ? 'Активен' : 'Завершен'}
          </div>
        </div>
      </div>
    </form>
  );
}

PostProject.propTypes = {
  start: stringType,
  finish: stringType,
  title: stringType,
  is_active: boolType,
};
