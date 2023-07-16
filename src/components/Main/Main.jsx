import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Main() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className='main'>
         <ListProject />
        <div className='main__container'>
          <ProjectHeader />
          <ProjectContainer />
        
        </div>
      </main>
    </DndProvider>
  );
}
