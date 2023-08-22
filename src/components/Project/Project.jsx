import { boolType, stringType, arrayType } from '../../constatnts/prop-types';
import avatar from '../../images/user-avatar-profile.png';


export default function Project({ title, start, finish, isActive, users, }) {

 const usersProject = Array.from(users).find((item) => item.role == 'pm')
 const creator = usersProject?.user;
 const photo = creator?.photo;

  return (
    <form className='project'>
      <div className='project__list-name'>{title}</div>
      <div className='project__list-name'>{start}</div>
      <div className='project__list-name'>{finish}</div>
      <div className='project__list-name'>
        <div className='project__list-member'>
          <img src={photo !== null ? photo : avatar} className='project__creator-photo' />
        
          <div className='project__creator'>
          
            {creator?.last_name} {creator?.last_name}
          </div>
        </div>
      </div>
      <div className='project__list-name'>
        <div
          className={
            isActive
              ? 'project__list-status-active'
              : 'project__list-status-close'
          }
        >
          {isActive ? 'Активен' : 'Завершен'}
        </div>
      </div>
    </form>
  );
}

Project.propTypes = {
  title: stringType,
  start: stringType,
  finish: stringType,
  isActive: boolType,
  users: arrayType,
};
