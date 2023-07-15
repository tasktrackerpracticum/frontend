import { useEffect } from 'react';
import { openFunctionType } from '../../constatnts/prop-types';
import { NavLink} from "react-router-dom";
import { useDispatch, useSelector }  from "react-redux";
import { fetchProjects } from '../../services/projectsSlice';

export default function Project({ isOpen, setOpen }) {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.projects)

  const openTaskCreate = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch]);

  return (
    <section className='project'>

      <div className='project__wrap'>
        <div className='project__create'>
          <button className='project__create-btn'>
            <div className='project__icon-create' onClick={openTaskCreate} />
            Новый проект
          </button>
          <NavLink to="/"> 
          <button> RETURN</button>
          </NavLink>
        </div>
        {status === 'loading' && <h2>loading...</h2>}
        {error && <h2>{error}</h2>}
        <div className='project__content'>
          <div className='project__tag'>
            <h2 className='project__tag-name'>Название</h2>
            <h2 className='project__tag-name'>Дата проведения</h2>
            <h2 className='project__tag-name'>Участник</h2>
            <h2 className='project__tag-name'>Статус</h2>
          </div>
          <div className='project__list'>
            <div className='project__container'>
              <div className='project__list-name'>Имя проекта</div>
              <div className='project__list-name'>16.06.2023 - 16.07.2023</div>
              <div className='project__list-name'>
                <div className='project__list-member'></div>
              </div>
              <div className='project__list-name'>
                <div className='project__list-status'>Активен</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Project.propTypes = {
  isOpen: openFunctionType,
  setOpen: openFunctionType,
};
