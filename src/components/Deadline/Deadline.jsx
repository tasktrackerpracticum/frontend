import { stringType } from '../../constatnts/prop-types';

export default function Deadline({ start, finish }) {
  return (
    <span className='deadline'>
      {start} - {finish}
    </span>
  );
}

Deadline.propTypes = {
  start: stringType,
  finish: stringType,
};
