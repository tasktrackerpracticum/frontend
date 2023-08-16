import avatar from '../../images/user-avatar-profile.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../services/usersSlice';
import { activeType, functionType } from '../../constatnts/prop-types';

// export default function Select({
//   setActliveListPerformer,
//   isActiveListPerformer,
// }) {

export default function Select({
  setActliveListPerformer,
  isActiveListPerformer,
}) {
  const dispatch = useDispatch();
  const { status, error, users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  

  return (
    <div
      className={!openList ? 'select__active' : 'select__hidden'}
    >
      {users.length !== 0 &&
        users.map((user) => {
          if (currentUser !== user.id) {
            return (
              <li key={user.id} className='select__container'>
                <img
                  src={!user.photo ? avatar : user.photo}
                  className='select__avatar-performer'
                  alt='avatar'
                />
                <div
                  className='select__performer'
                  onClick={() => {
							
										if (!performers.map((item) => item.id).includes(user.id)) {

											dispatch(addUsersToCreateReducer({ user }));
										}
										
                   
                  }}
                >
                  {user.first_name} {user.last_name}
                </div>
              </li>
            );
          }
        })}
    </div>
  );
}

Select.propTypes = {
    setActliveListPerformer: functionType,
    isActiveListPerformer: activeType,

  };
  