import '../../scss/components/task.scss';
import { taskContainerType } from "../../constatnts/prop-types";

export default function Task({ title, deadline }) {
  return (
    <article className='task'>
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
}
