import {
  objectType,
  functionType,
  arrayType,
} from '../../constatnts/prop-types';
import PostProject from "../PostProject/PostProject.jsx";

export default function ListProject({
  openProjectCreate,
  projects,
  status,
  error,
  onClick,
}) {
  const openProject = (evt) => {
    const project = evt;
    onClick(project);
  };
  

  return (
    <section className='listProject'>
      <div className='listProject__create'>
        <button
          className='listProject__create-btn'
          onClick={openProjectCreate}
        ></button>
      </div>
      {status === 'loading' && <h2>loading...</h2>}{' '}
      {/* потом добавить спиннер и убрать */}
      {error && <h2>{error}</h2>} {/* потом добавить модалку ошибки и убрать */}
      <div className='listProject__content'>
        {projects.length !== 0 &&
          projects.map((item) => {
            return ( 
            <li key={item.id} className="listProject__container"  onClick={() => openProject(item)}>
              <PostProject title={item.title} is_active={item.is_active} start={item.date_start} finish={item.date_finish}/>

            </li>
            );
          })}
      </div>
    </section>
  );
}

ListProject.propTypes = {
  openProjectCreate: functionType,
  projects: arrayType,
  onClick: functionType,
  status: objectType,
  error: objectType,
};
