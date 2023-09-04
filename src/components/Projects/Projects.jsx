import { useState } from 'react';
import { functionType } from '../../constatnts/prop-types';
import {  useSelector }  from "react-redux";
import Project from '../Project/Project';
import { PROJECTS } from '../../constatnts/constants';
import { Link } from 'react-router-dom';

export default function Projects({ openProjectCreate }) {
  const { status, error, projects } = useSelector((state) => state.projects);
  const [isSortName, setSortName] = useState(false);



  
  console.log(projects)


  return (
    <section className='projects'>
      <div className='projects__wrap'>
        <div className='projects__create'>
          <button className='projects__create-btn' onClick={openProjectCreate}>
            <div className='projects__icon-create' />
            Новый проект
          </button>
        </div>
        {status === 'loading' && <h2>loading...</h2>}{' '}
        {/* потом добавить спиннер и убрать */}
        {error && <h2>{error}</h2>}{' '}
        {/* потом добавить модалку ошибки и убрать */}
        <div className='projects__content'>
          <div className='projects__tag' onClick={() => setSortName(!isSortName)}>
            <div className='projects__tag-container'>
              <p className='projects__tag-name'>Проект</p>
              <div
                className={
                  isSortName
                    ? 'projects__tag-sort-more '
                    : 'projects__tag-sort-less '
                }
              />
            </div>
            <p className='projects__tag-name'>Начало</p>
            <p className='projects__tag-name'>Дедлайн</p>
            <p className='projects__tag-name'>Автор</p>
            <p className='projects__tag-name'>Статус</p>
          </div>
          <div className='projects__list'>
          {projects.length !== 0 && (projects.map((item) => {
              return (
                <Link to={`${PROJECTS}/${item.id}`} key={item.id} className="projects__container">
                  <Project users={item.users} title={item.title} start={item.date_start} finish={item.date_finish} isActive={item.is_active}/>
                </Link>
              )
            }))}

          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  openProjectCreate: functionType,
};
