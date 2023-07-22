import avatar from '../../images/user-avatar-profile.png';

function TeamProject() {
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
      <div className='teamProject__count'>+10</div>
    </section>
  );
}

export default TeamProject;
