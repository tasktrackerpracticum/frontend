import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { functionType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchProjects } from '../../services/projectsSlice';
import Scroll from '../Scroll/Scroll';

export default function Main({ openProjectCreate, openTaskCreate }) {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const cardsRef = useRef(null);

  return (
    <DndProvider backend={HTML5Backend}>
        <main className='main'>
          <ListProject
            openProjectCreate={openProjectCreate}
            projects={projects}
            status={status}
            error={error}
          />
          <div className='main__container' ref={cardsRef}>
            <Scroll cardsRef={cardsRef} />
            <ProjectHeader />
            <ProjectContainer openTaskCreate={openTaskCreate} />
          </div>
        </main>
    </DndProvider>
  );
}

Main.propTypes = {
  openTaskCreate: functionType,
  openProjectCreate: functionType
};
