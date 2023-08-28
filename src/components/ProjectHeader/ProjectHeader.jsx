import TeamProject from '../TeamProject/TeamProject';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { Fragment } from 'react';
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';
import InputProject from './InputProject';
import { useForm } from 'react-hook-form';
import { updateProjectId } from '../../services/projectsSlice';

export default function ProjectHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { projects } = useSelector((state) => state.projects);
  const project = projects.find((item) => item.id === Number(id));
  const creator = project?.users.find((item) => item.role == 'pm');

  const project_id = project?.id;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleActionChange({ project_id, data });
    closeInput();
  };

  function handleActionChange({ project_id, data }) {
    dispatch(updateProjectId({ project_id, data }));
  }

  const [openDescription, setOpenDescription] = React.useState(false);
  const [openDateStart, setOpenDateStart] = React.useState(false);
  const [openDateFinish, setOpenDateFinish] = React.useState(false);

  function openInputDateFinish() {
    reset();
    setOpenDateFinish(!openDateFinish);
  }

  function openInputDescription() {
    reset();
    setOpenDescription(!openDescription);
  }
  function openInputDateStart() {
    reset();
    setOpenDateStart(!openDateStart);
  }

  function closeInput() {
    setOpenDescription(false);
    setOpenDateStart(false);
    setOpenDateFinish(false);
  }

  return (
    <Fragment>
      {project && (
        <div className='projectHeader'>
          <form
            className='projectHeader__content'
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className='projectHeader__header'>
              {project.title}
              <div
                className={
                  project.is_active
                    ? 'projectHeader__status-actived'
                    : 'projectHeader__status-closed'
                }
              >
                {project.is_active ? 'Активен' : 'Завершен'}
              </div>
            </h2>
            {openDescription ? (
              <InputProject
                isOpen={openInputDescription}
                value={project.description}
                title={'Описание проекта'}
                inputType={'text'}
                register={register}
                dataType={'description'}
                isMaxLength={500}
                isMinLength={5}
                errors={errors}
              />
            ) : (
              <div
                className='projectHeader__description'
                onClick={openInputDescription}
              >
                {' '}
                {project.description !== ''
                  ? project.description
                  : '+ Добавить описание'}
              </div>
            )}

            <div className='projectHeader__container'>
              <div className='projectHeader__container-date'>
                {openDateStart ? (
                  <InputProject
                    isOpen={openInputDateStart}
                    value={project.date_start}
                    title={'Начало'}
                    inputType={'date'}
                    register={register}
                    dataType={'date_start'}
                    errors={errors}
                  />
                ) : (
                  <p
                    className='projectHeader__projectTimeline'
                    onClick={openInputDateStart}
                  >
                    Начало: &nbsp;
                      <span className='projectHeader__projectDate'>{project.date_start ? project.date_start.split("-").reverse().join("-").replaceAll("-", ".") : '---'}</span>
                  </p>
                )}

                {openDateFinish ? (
                  <InputProject
                    isOpen={openInputDateFinish}
                    value={project.date_finish}
                    title={'Дедлайн'}
                    inputType={'date'}
                    register={register}
                    dataType={'date_finish'}
                    errors={errors}
                  />
                ) : (
                  <p
                    className='projectHeader__projectTimeline'
                    onClick={openInputDateFinish}
                  >
                    {' '}
                    Дедлайн: &nbsp;
                    <span className='projectHeader__projectDate'>{project.date_finish ? project.date_finish.split("-").reverse().join("-").replaceAll("-", ".") : '---'}</span>
                  </p>
                )}
              </div>

              <div className='projectHeader__container-creator'>
                Автор:
                <div className='projectHeader__creator'>
                  {creator.photo ? (
                    <AvatarPic pic={creator?.user?.photo} size={24} />
                  ) : (
                    <AvatarLetter
                      nameUser={creator?.user?.first_name}
                      surnameUser={creator?.user?.last_name}
                      size={32}
                      fzie={10}
                    />
                  )}
                  <div className='projectHeader__creator-name'>
                    {creator?.user?.first_name} {creator?.user?.last_name}
                  </div>
                </div>
              </div>
              <div className='projectHeader__team'>
                Команда: <TeamProject users={project.users} />
              </div>
            </div>
          </form>
          <button
            className='projectHeader__button'
            onClick={() => navigate('/')}
          />
        </div>
      )}
    </Fragment>
  );
}
