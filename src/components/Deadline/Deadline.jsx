import { stringType } from '../../constatnts/prop-types';

export default function Deadline({ start, finish }) {
  return (
    <section className='deadline'>
      Начало:  {start}  Дедлайн: {finish}
    </section>
  );
}

Deadline.propTypes = {
  start: stringType,
  finish: stringType,
};
