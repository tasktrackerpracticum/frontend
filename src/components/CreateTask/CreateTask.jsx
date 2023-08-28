import { boolType, functionType } from '../../constatnts/prop-types';
import { useDispatch } from 'react-redux';
import { createNewTask } from '../../services/tasksSlice';
import { useLocation } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import InputField from '../CreateProject/InputField';

function CreateTask({ active, setActive }) {
  const location = useLocation();
  const projectId = parseInt(location.pathname.match(/\d+/));
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
      date_start: null,
      date_finish: null,
      users: [],
    },
  });


  // const [isActiveListPerformer, setActliveListPerformer] = useState(false);
  // const [title, setTitle] = useState();
  // const [deadline, setDeadline] = useState('');
  // const [disabled, setDisabled] = useState(true);


  const onSubmit = (data) => {
    const title = data.title
    const deadline = data.date_finish
    dispatch(createNewTask({ title, deadline, projectId }));
    setActive(!active);
  };

  return (
    <section className={active ? 'createProject__active' : 'createProject'}>
      <FormProvider {...methods}> 
        <form className='createProject__form' onSubmit={methods.handleSubmit(onSubmit)}>
        <InputField active={active} setActive={setActive} inputPlaceholder={'Новая задача'} isCreateTask={true}/>
        <div className='createProject__container-btn'>
          <button className='createProject__submit-btn' type='submit'>+ Создать задачу</button>
        </div>
        </form>
      </FormProvider>
    </section>
  );
}

export default CreateTask;

CreateTask.propTypes = {
  active: boolType,
  setActive: functionType,
};
