import { useRef } from "react";
import { taskContainerType } from "../../constatnts/prop-types";
import Task from "../Task/Task";
import { useDrag, useDrop } from 'react-dnd';

export default function TaskContainer({ taskHeader, key }) {

  const ref = useRef(null);

  // const [{isDrag}, drag] = useDrag({

  const [, drag] = useDrag({
    type: "sort_project_boards",
    item: () => {
      return { key }
    },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const [{handlerId}, drop] = useDrop({
    accept: "sort_project_boards",
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      // Индекс перемещаемого элемента
      const dragIndex = item.key;
      // Индекс текущего элемента (над которым находится курсор при dnd)
      const hoverIndex = key;
      // console.log('hoverIndex', hoverIndex)
      // Выходим, если индексы сопадают
      if (dragIndex === hoverIndex) {
        // console.log('dragIndex === hoverIndex')
        return
      };
      // Получаем положение текущего элемента относительно экрана
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Получаем центр текущего элемента по вертикали
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
       // Получаем положение курсора
		  const clientOffset = monitor.getClientOffset() || { y: 0 };
      // Получаем положение курсора относительно текущего элемента
		  const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Выходим, если перемещаемый элемент ниже, чем 50% от высоты текущего
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      };
      // Выходим, если перемещаемый элемент выше, чем 50% от высоты текущего
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      };

      // dispatch({
      //   type: MOVE_USER_ITEM,
      //   from: dragIndex,
      //   to: hoverIndex,
      // });
      // // Сразу меняем индекс перемещаемого элемента
      item.key = hoverIndex;
    },
  });


  drag(drop(ref));

  return(
    <section ref={ref} data-handler-id={handlerId} className="taskContainer">
      <div className="taskContainer__content"> 
      <h2 className="taskContainer__header">{ taskHeader }</h2>
      <button className="taskContainer__button">Новая задача</button>
      <ul className="taskContainer__tasks">
        <li className="taskContainer__task">
          <Task />
        </li>
        <li className="taskContainer__task">
          <Task />
        </li>
        <li className="taskContainer__task">
          <Task />
        </li>
      </ul>
      </div>
    </section>
  )
}

TaskContainer.propTypes = {
  taskHeader: taskContainerType,
  key: taskContainerType
}
