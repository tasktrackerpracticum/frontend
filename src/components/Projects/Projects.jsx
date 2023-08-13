import { useEffect } from 'react';
import { functionType } from '../../constatnts/prop-types';
import { useDispatch, useSelector }  from "react-redux";
import { fetchProjects } from '../../services/projectsSlice';
import Project from '../Project/Project';

export default function Projects({ openTaskCreate, onClick, selectListProject }) {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch]);
  

  const handlerProject = (evt) => {
    const project = evt;
    onClick(project);
    selectListProject();
  };

  return (
    <section className='projects'>

      <div className='projects__wrap'>
        <div className='projects__create'>
          <button className='projects__create-btn' onClick={openTaskCreate}>
            <div className='projects__icon-create' />
            Новый проект
          </button>
        </div>
        {status === 'loading' && <h2>loading...</h2>} {/* потом добавить спиннер и убрать */}
        {error && <h2>{error}</h2>}                   {/* потом добавить модалку ошибки и убрать */}
        <div className='projects__content'>
          <div className='projects__tag'>
            <h2 className='projects__tag-name'>Название</h2>
            <h2 className='projects__tag-name'>Дата проведения</h2>
            <h2 className='projects__tag-name'>Участник</h2>
            <h2 className='projects__tag-name'>Статус</h2>
          </div>
          <div className='projects__list'>
            {projects.length !== 0 && (projects.map((item) => {
              return (
                <li key={item.id} className="projects__container" onClick={() => handlerProject(item)}>
                <Project title={item.title} start={item.date_start} finish={item.date_finish} isActive={item.is_active}/>
                </li>
              )
            }))}
          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  openTaskCreate: functionType,
  selectListProject: functionType,
  onClick: functionType
};
