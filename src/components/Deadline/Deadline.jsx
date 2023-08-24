import { stringType } from '../../constatnts/prop-types';

export default function Deadline({ start, finish }) {
  return (
    <section className='deadline'>
      <div className="deadline__title">Начало:  {start}  </div>
      <div className="deadline__title">Дедлайн: {finish} </div>
    </section>
  );
}

Deadline.propTypes = {
  start: stringType,
  finish: stringType,
};
