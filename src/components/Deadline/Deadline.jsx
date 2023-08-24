import { stringType } from '../../constatnts/prop-types';

export default function Deadline({ start, finish }) {
  return (
    <span className='deadline'>
      {start ? start.split("-").reverse().join("-").replaceAll("-", ".") : '---'} - {finish ? finish.split("-").reverse().join("-").replaceAll("-", ".") : '---'}
    </span>
  );
}

Deadline.propTypes = {
  start: stringType,
  finish: stringType,
};
