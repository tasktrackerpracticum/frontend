import { useSelector } from 'react-redux';
import { boolType, stringType, arrayType } from '../../constatnts/prop-types';
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';


export default function Project({ title, start, finish, isActive, users, }) {

 const usersProject = Array.from(users).find((item) => item.role == 'pm')
 const creator = usersProject?.user;
 const photo = creator?.photo;
 const creatorId = usersProject?.user.id;

 const { id } = useSelector((state) => state.user.user);


  return (
    <form className='project'>
      <h2 className='project__list-name'>{title}</h2>
      <p className='project__list-name'>{start ? start.split("-").reverse().join("-").replaceAll("-", ".") : '---'}</p>
      <p className='project__list-name'>{finish ? finish.split("-").reverse().join("-").replaceAll("-", ".") : '---'}</p>
      <div className='project__list-name'>
        <div className='project__list-member'>
        {photo ? (
          <AvatarPic pic={photo} size={28} />
          ) : (
            <AvatarLetter
              nameUser={creator?.first_name}
              surnameUser={creator?.last_name}
              size={28}
              fSize={12}
            />
          )}
        
          <p className='project__creator'>
            {creatorId === id ? 'Я' : `${creator?.first_name} ${creator?.last_name}`}
          </p>
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
