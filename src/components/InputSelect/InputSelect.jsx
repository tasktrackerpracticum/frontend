import { useState } from 'react';
import { functionType, stringType } from '../../constatnts/prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addUsersToCreateReducer } from '../../services/projectsSlice';
import ReactSelect from 'react-select';
import avatar from '../../images/user-avatar-profile.png';

function InputSelect({ isOpen, title }) {
  const users = useSelector((state) => state.users.users);

  const currentUser = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const performersList = useSelector(
    (state) => state.projects.listUsersToCreateProject,
  );

  const [performers, setPerformers] = useState(performersList);

  const options = users
    .map((item) => ({
      value: item.id,
      label: item.first_name + ' ' + item.last_name,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      photo: item.photo,
    }))
    .filter((item) => item.value !== currentUser.id);

  const { control } = useFormContext();

  const savePerformers = () => {
    dispatch(addUsersToCreateReducer(performers));
    isOpen();
  };

  const updatePerformers = (value) => {
    if (!performers.map((item) => item.id).includes(value.value)) {
      setPerformers([
        ...performers,
        {
          id: value.value,
          email: value.email,
          last_name: value.last_name,
          first_name: value.first_name,
          photo: value.photo,
          role: 'user',
        },
      ]);
    }
  };

  const deletePerformer = (performer) => {
    const newPerformers = performers.filter((item) => item.id !== performer.id);
    setPerformers(newPerformers);
  };

  return (
    <section className='inputSelect'>
      <div className='input__title'>{title}:</div>
      <div className='input__content'>
        <div className='input__form'>
          <div className='input__container'>
            <Controller
              control={control}
              name='users'
              render={({ field: { onChange, value } }) => (
                <ReactSelect
                  options={options}
                  value={value}
                  onChange={(newValue) => {
                    console.log(value);
                    updatePerformers(newValue);
                    onChange(newValue);
                  }}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      width: '400px',
                    }),
                  }}
                />
              )}
            />
          </div>
          <div className='inputSelect__chip-container'>
            {performers.map((item) => {
              return (
                <li key={item.id} className='inputSelect__chip'>
                  <div className='inputSelect__chip-container-photo'>
                    <img
                      className='inputSelect__chip-photo'
                      src={item.photo !== null ? item.photo : avatar}
                    />
                  </div>
                  <div className='inputSelect__chip-text'>
                    {item.first_name} {item.last_name}
                  </div>
                  <div
                    className='inputSelect__chip-delete'
                    onClick={() => deletePerformer(item)}
                  />
                </li>
              );
            })}
          </div>

          <div className='input__buttons'>
            <button
              type='button'
              className='input__btn-cancel'
              onClick={isOpen}
            >
              Отмена
            </button>
            <div onClick={savePerformers} className='input__btn-submit'>
              Сохранить
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default InputSelect;

InputSelect.propTypes = {
  isOpen: functionType,
  title: stringType,
  inputType: stringType,
  dataType: stringType,
};
