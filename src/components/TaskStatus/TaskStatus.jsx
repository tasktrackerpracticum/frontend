import { taskContainerType } from '../../constatnts/prop-types';

export default function TaskStatus({deadline}) {
  let formatDate = {
    days: 0,
    hourse: 0,
    minutes: 0,
  };

  const deadlineDate = new Date(deadline);
  const todayDate = new Date();
  // const targetDate = (deadlineDate - todayDate)/ (1000 * 60 * 60 * 24 * 7) //разница в неделях

  const targetDateDays = (deadlineDate - todayDate) / (1000 * 60 * 60 * 24); //разница в днях
  const targetDateHours = (deadlineDate - todayDate) / (1000 * 60 * 60); //разница в часах
  const targetDateMinutes = (deadlineDate - todayDate) / (1000 * 60); //разница в минутах

  // const diffDays = (targetDateDays - Math.round(targetDateDays))
  // const diffHourse = (targetDateHours - Math.round(targetDateHours - targetDateDays * 24))
  // console.log('diffDays', diffDays)
  // console.log('diffHourse', diffHourse)

  formatDate.days = Math.floor(targetDateDays);
  formatDate.hourse = Math.floor(targetDateHours - formatDate.days * 24);
  formatDate.minutes = Math.floor(
    targetDateMinutes - formatDate.days * 24 * 60 - formatDate.hourse * 60,
  );

	return (
    <div className='task__timeContainer'>
      <span className='task__time-status'>
        {`${formatDate.days !== 0 ? formatDate.days : ''}${formatDate.days !== 0 ? 'д' : ''} ${formatDate.hourse}ч ${formatDate.minutes}мин`}
      </span>
    </div>
	)
}

TaskStatus.propTypes = {
  deadline: taskContainerType,
};
