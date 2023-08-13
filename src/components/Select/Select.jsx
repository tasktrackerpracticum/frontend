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
  isActiveListPerformer,
}) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <div
      className={isActiveListPerformer ? 'select__active' : 'select__hidden'}
    >
      {users.length !== 0 &&
        users.map((item) => {
          return (
            <li key={item.id} className='select__container'>
              <img
                src={avatar}
                className='select__avatar-performer'
                alt='avatar'
              />
              <div className='select__perfomer'>
                {item.first_name} {item.last_name}
              </div>
            </li>
          );
        })}
    </div>
  );
}


Select.propTypes = {
    setActliveListPerformer: functionType,
    isActiveListPerformer: activeType,

  };
  