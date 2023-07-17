import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { openType } from '../../constatnts/prop-types';

export default function Main({isOpen, setOpen}) {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className='main'>
         <ListProject isOpen={isOpen} setOpen={setOpen}/>
        <div className='main__container' onClick={() => setOpen(false)}>
          <ProjectHeader />
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
