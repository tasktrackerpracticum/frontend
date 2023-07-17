import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { openType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/projectsSlice';

export default function Main({ isOpen, setOpen }) {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.projects);

  const [onProject, setProject] = useState([projects]);

  const openProject = (onProject) => {
    const project = onProject;
    setProject(project);
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <main className='main'>
        <ListProject
          isOpen={isOpen}
          setOpen={setOpen}
          projects={projects}
          status={status}
          error={error}
          onClick={openProject}
        />
        <div className='main__container' onClick={() => setOpen(false)}>
          <ProjectHeader onProject={onProject}/>
          <ProjectContainer />
        </div>
      </main>
    </DndProvider>
  );
}

Main.propTypes = {
  isOpen: openType,
  setOpen: openType,
};
