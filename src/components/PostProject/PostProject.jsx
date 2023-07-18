import { stringType, boolType } from '../../constatnts/prop-types';

export default function PostProject({ title, is_active }) {
  return (
    <form className='postProject'>
      <div className='postProject__project-title'>{title}</div>
      <div className='postProject__project-info'>
        <div className='postProject__project-time'>16.06.2023-16.06.2023</div>
        <div className='postProject__wrap'>
          <div className='postProject__project-member'>...</div>
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
  title: stringType,
  is_active: boolType,
};
