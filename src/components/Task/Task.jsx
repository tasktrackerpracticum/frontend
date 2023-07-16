import '../../scss/components/task.scss';

export default function Task() {
  return (
    <article className='task'>
      <h2 className='task__header'>Составить пользовательский сценаий</h2>
      <div className='task__content'>
        <div className='task__timeContainer'>
          <div className='task__time-status' />{' '}
          {/* создать компонент СтатусаЗадачи, состоящий из несколько иконок и меняющих цвет фона  */}
          10:11
        </div>
        <div className='task__team'>...</div> {/* компонент с отрисовкой Аватарок команды */}
      </div>
    </article>
  );
}
