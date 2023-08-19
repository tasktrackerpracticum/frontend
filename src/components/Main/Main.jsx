import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';
import Projects from '../Projects/Projects';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { functionType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { fetchProjects } from '../../services/projectsSlice';
import Scroll from '../Scroll/Scroll';

export default function Main({ openProjectCreate, openTaskCreate }) {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.projects);
  const [onProject, setProject] = useState([projects]);
  const [onSelectListProject, setSelectListProject] = useState(true);

  const openProject = (onProject) => {
    const project = onProject;
    setProject(project);
  };

  function selectListProject() {
    setSelectListProject(!onSelectListProject);
  }

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const cardsRef = useRef(null);

  return (
    <DndProvider backend={HTML5Backend}>
      {onSelectListProject ? (
        <Projects
          openProjectCreate={openProjectCreate}
          onClick={openProject}
          selectListProject={selectListProject}
        />
      ) : (
        <main className='main'>
          <ListProject
            openProjectCreate={openProjectCreate}
            projects={projects}
            status={status}
            error={error}
            onClick={openProject}
          />
          <div className='main__container' ref={cardsRef}>
            <Scroll cardsRef={cardsRef} />
            <ProjectHeader
              onProject={onProject}
              selectListProject={selectListProject}
            />
            <ProjectContainer openTaskCreate={openTaskCreate} />
          </div>
        </main>
      )}
    </DndProvider>
  );
}

Main.propTypes = {
  openTaskCreate: functionType,
  openProjectCreate: functionType
};
