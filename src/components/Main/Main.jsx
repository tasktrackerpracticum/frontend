import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';
import Projects from '../Projects/Projects';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { openType } from '../../constatnts/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/projectsSlice';

export default function Main({ openTaskCreate }) {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.projects);
  const [onProject, setProject] = useState([projects]);
  const [onSelectListProject, setSelectListProject] = useState(true);

  const openProject = (onProject) => {
    const project = onProject;
    setProject(project);
  };

  function selectListProject()  {
    setSelectListProject(!onSelectListProject);
  }

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      { onSelectListProject ? <Projects  openTaskCreate={openTaskCreate} onClick={openProject} selectListProject={selectListProject}/> :
      <main className='main'>
        <ListProject
        openTaskCreate={openTaskCreate}
          projects={projects}
          status={status}
          error={error}
          onClick={openProject}
        />
        <div className='main__container'>
          <ProjectHeader onProject={onProject} selectListProject={selectListProject}/>
          <ProjectContainer />
        </div>
      </main>
       }
    </DndProvider>
  );
}

Main.propTypes = {
  openTaskCreate: openType,
};
