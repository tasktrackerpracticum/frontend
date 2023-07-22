import { stringType } from "../../constatnts/prop-types";

export default function Deadline({start, finish}) {
  return (
   <section className="deadline">
    {start} - {finish}
   </section>
  )
}



Deadline.propTypes = {
    start: stringType,
    finish: stringType,
  };
