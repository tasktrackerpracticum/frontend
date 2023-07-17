import { taskContainerType } from "../../constatnts/prop-types";
import "../../scss/components/task.scss";

export default function Task({ title, deadline }) {

  return(
    <article className="task">
      <h2 className="task__header">{title}</h2>
      <p className="task__timeContainer">{deadline}</p>
    </article>
  )
};

Task.propTypes = {
  title: taskContainerType,
  deadline: taskContainerType,
}
