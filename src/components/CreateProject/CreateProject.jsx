import { boolType, setActiveType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
 createNewProjects,
} from '../../services/projectsSlice';
import InputField from './InputField';
import { useForm, FormProvider } from 'react-hook-form';


function CreateProject({ active, setActive }) {
  const performersList = useSelector(
    (state) => state.projects.listUsersToCreateProject,
  );

  const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
      date_start: null,
      date_finish: null,
      users: [],

    },
  });


  const onSubmit = (data) => {
    data.users = performersList;
    console.log('data submit', data);
   dispatch(createNewProjects(data));
    setActive(!active);
  };

  const dispatch = useDispatch();

  return (
    
    <section className={active ? 'createProject__active' : 'createProject'}>
      <FormProvider {...methods}> 
      <form className='createProject__form' onSubmit={methods.handleSubmit(onSubmit)}>
       <InputField active={active} setActive={setActive}/>

       <div className='createProject__container-btn'>
              <button
                className='createProject__submit-btn'
                type='submit'
              >
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
