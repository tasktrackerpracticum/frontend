import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { functionType } from '../../constatnts/prop-types';
import {  useRef } from 'react';
import Scroll from '../Scroll/Scroll';

export default function Main({ openProjectCreate, openTaskCreate }) {
  const cardsRef = useRef(null);

  return (
    <DndProvider backend={HTML5Backend}>
        <main className='main'>
          <ListProject openProjectCreate={openProjectCreate}/>
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
