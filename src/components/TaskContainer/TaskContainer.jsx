import { taskContainerType } from "../../constatnts/prop-types";
import Task from "../Task/Task";

export default function TaskContainer({ taskHeader }) {

  return(
    <section className="taskContainer">
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
    </section>
  )
}

TaskContainer.propTypes = {
  taskHeader: taskContainerType
}
