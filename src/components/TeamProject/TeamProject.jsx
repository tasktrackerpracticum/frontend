import { Fragment } from 'react';
import { objectType } from '../../constatnts/prop-types';
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';

function TeamProject({ users }) {
  const usersProject = structuredClone(users);

  return (
    <Fragment>
      {users && (
        <section className='teamProject'>
          <div className='teamProject__avatar'>
            {users.slice(0, 3).map((item) => {
              return (
                <div key={item.id} className='teamProject__avatar-icon'>
                  {item.user.photo ? (
                    <AvatarPic pic={item.user.photo} size={32} />
                  ) : (
                    <AvatarLetter
                      nameUser={item.user.first_name}
                      surnameUser={item.user.last_name}
                      size={32}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className='teamProject__count'>
            {' '}
            {usersProject.length <= 3 ? '' : `+ ${usersProject.length - 3}`}
          </div>
        </section>
      )}
    </Fragment>
  );
}

export default TeamProject;

TeamProject.propTypes = {
  users: objectType,
};
