import { arrayType } from '../../constatnts/prop-types';
import avatar from '../../images/user-avatar-profile.png';

function TeamProject({users}) {
  const usersProject = structuredClone(users);

  return (
    <section className='teamProject'>
      <div className='teamProject__avatar'>
        <img
          src={avatar}
          className='teamProject__avatar-icon'
          alt='тут аватар'
        />
        <img
          src={avatar}
          className='teamProject__avatar-icon'
          alt='тут аватар'
        />
        <img
          src={avatar}
          className='teamProject__avatar-icon'
          alt='тут аватар'
        />
      </div>
      <div className='teamProject__count'> +{usersProject.length}</div>
    </section>
  );
}

export default TeamProject;

TeamProject.propTypes = {
 users: arrayType
};
