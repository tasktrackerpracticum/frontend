import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constatnts/constants';
import { functionType } from '../../constatnts/prop-types';
import PostProject from '../PostProject/PostProject.jsx';
import { useSelector } from 'react-redux';

export default function ListProject({ openProjectCreate }) {
  const { status, error, projects } = useSelector((state) => state.projects);

  return (
    <section className='listProject' onClick={(e) => e.stopPropagation()}>
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
              <Link to={`${PROJECTS}/${item.id}`} key={item.id} className="listProject__container">
                <PostProject users={item.users.find((item) => item.role == 'pm')} title={item.title} is_active={item.is_active} start={item.date_start} finish={item.date_finish}/>
              </Link>
            );
          })}
      </div>
    </section>
  );
}

ListProject.propTypes = {
  openProjectCreate: functionType,
};
