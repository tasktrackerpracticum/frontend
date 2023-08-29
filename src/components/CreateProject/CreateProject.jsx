import { boolType, setActiveType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProjects } from '../../services/projectsSlice';
import InputField from './InputField';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';


function CreateProject({ active, setActive }) {
  const [disableButton, isDisableButton] = useState(true)
  const performersList = useSelector((state) => state.projects.listUsersToCreateProject);

  const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
      date_start: null,
      date_finish: null,
      users: [],
    },
  });

  //Блокирует кнопку ТОЛЬКО если не добавлены исполнители. Не понятно, как вытащить стейт из формы
  useEffect(() => {
    if (performersList.length !== 0) {
      isDisableButton(false)
    }
  }, [performersList.length])


  const onSubmit = (data) => {
    data.users = performersList;
    dispatch(createNewProjects(data));
    setActive(!active);
  };

  const dispatch = useDispatch();

  return (
    <section className={active ? 'createProject__active' : 'createProject'}>
      <FormProvider {...methods}> 
        <form className='createProject__form' onSubmit={methods.handleSubmit(onSubmit)}>
          <InputField active={active} setActive={setActive} inputPlaceholder={'Новый проект'}/>
          <div className='createProject__container-btn'>
            <button
              className='createProject__submit-btn'
              disabled={disableButton ? true : false}
              type='submit'>
                + Создать проект
              </button>
          </div>
        </form>
      </FormProvider>
    </section>
   
  );
}

export default CreateProject;

CreateProject.propTypes = {
  active: boolType,
  setActive: setActiveType,
};
