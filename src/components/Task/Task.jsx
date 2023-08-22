import { numberType, taskContainerType } from "../../constatnts/prop-types";
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import { moveTask } from "../../services/tasksSlice";
import { useDispatch } from "react-redux";

export default function Task({ title, deadline, id, taskColumn, index }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  // console.log('index', index)

  const [{isDrag}, drag] = useDrag({
    type: "sort_task",
    item: () => {
      return { id, taskColumn, index }
    },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const [{handlerId}, drop] = useDrop({
    accept: "sort_task",
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      // console.log('item', item.id)

      // Индекс перемещаемого элемента
      const dragIndex = item.index;
      // Индекс текущего элемента (над которым находится курсор при dnd)
      const hoverIndex = index;
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

      dispatch(moveTask({from: dragIndex, to: hoverIndex }));
      // Сразу меняем индекс перемещаемого элемента
      item.index = hoverIndex;
    },
  });

  const opacity = isDrag ? 0 : 1;
  const transition = isDrag ? '0.5s ease-in-out' : '0.5s ease-in-out';
  drag(drop(ref));

  return (
    <article ref={ref} data-handler-id={handlerId} className='task' style={{opacity, transition}}>
      <h2 className='task__header'>{title}</h2>
      <div className='task__content'>
        <div className='task__timeContainer'>
          <div className='task__time-status' />{' '}
          {/* создать компонент СтатусаЗадачи, состоящий из несколько иконок и меняющих цвет фона  */}
        {deadline}
        </div>
        <div className='task__team'>...</div> {/* компонент с отрисовкой Аватарок команды */}
      </div>
    </article>
  );
}
Task.propTypes = {
  title: taskContainerType,
  deadline: taskContainerType,
  index: numberType,
  taskColumn: taskContainerType,
  id: taskContainerType,
}
