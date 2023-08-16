import { useDispatch, useSelector } from "react-redux";
import { taskContainerType } from "../../constatnts/prop-types";
import Task from "../Task/Task";
import { useDrop } from "react-dnd";
import { updateColumn } from "../../services/tasksSlice";

export default function TaskContainer({ boradHeader, column }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  console.log(tasks);

  const [{ isHover }, drop] = useDrop({
    accept: "sort_task",
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop: ({ id, taskColumn }) => {
      if (taskColumn !== column) dispatch(updateColumn({ id, column }))
    }
  });

  const opacity = isHover ? 0.7 : 1;

  return(
    <section className="taskContainer" ref={drop} style={{opacity}}>
      <div className="taskContainer__content"> 
      <h2 className="taskContainer__header">{ boradHeader }</h2>
      {boradHeader === 'Беклог' && <button className="taskContainer__button">Новая задача</button>}
      <ul className="taskContainer__tasks">
        {tasks && (tasks.filter(task => task.column === column).map((item, index) => {
          return (
          <li key={item.id} className="taskContainer__task">
            <Task
              title={item.title}
              deadline={item.deadline}
              id={item.id}
              taskColumn={item.column}
              index={index}/>
          </li>
          )
        }))}
      </ul>
      </div>
    </section>
  )
}

TaskContainer.propTypes = {
  boradHeader: taskContainerType,
  column: taskContainerType
}
