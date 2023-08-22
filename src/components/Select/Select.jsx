import avatar from '../../images/user-avatar-profile.png';
import {  useSelector } from 'react-redux';
import { boolType } from '../../constatnts/prop-types';

// export default function Select({
//   setActliveListPerformer,
//   isActiveListPerformer,
// }) {

export default function Select({
  isActiveListPerformer,
}) {
 
  const {  users } = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.user.user);

  return (
    <section
      className={!isActiveListPerformer ? 'select__active' : 'select__hidden'}
    >
      {users.length !== 0 &&
        users.map((user) => {
          if (currentUser !== user.id) {
            return (
              <li selected key={user.id} className='select__container'>
                <img
                  src={!user.photo ? avatar : user.photo}
                  className='select__avatar-performer'
                  alt='avatar'
                />
                <div
                  className='select__performer'
                >
                  {user.first_name} {user.last_name}
                </div>
              </li>
            );
          }
        })}
    </section>
  );
}

Select.propTypes = {
    isActiveListPerformer: boolType,

  };
  