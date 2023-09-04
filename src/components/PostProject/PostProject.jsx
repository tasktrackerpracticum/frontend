import { stringType, boolType, objectType } from '../../constatnts/prop-types';
import Deadline from '../Deadline/Deadline';
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';
import { useSelector } from 'react-redux';

export default function PostProject({
  title,
  is_active,
  start,
  finish,
  users,
}) {
  const usersProject = structuredClone(users);
  const creator = usersProject?.user;
  const photo = creator?.photo;
  const creatorId = usersProject?.user.id;

  const { id } = useSelector((state) => state.user.user);

  return (
    <form className='postProject'>
      <div className='postProject__project-title'>{title}</div>
      <div className='postProject__project-info'>
        <div className='postProject__project-time'>
          <Deadline start={start} finish={finish} />
        </div>
        <div className='postProject__wrap'>
          <div className='postProject__project-member'>
            {photo ? (
              <AvatarPic pic={photo} size={22} />
            ) : (
              <AvatarLetter
                nameUser={creator?.first_name}
                surnameUser={creator?.last_name}
                size={22}
                fSize={10}
              />
            )}
            <p className='postProject__creator'>
            {creatorId === id ? 'Я' : `${creator?.first_name} ${creator?.last_name}`}
            </p>
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
  users: objectType,
};
