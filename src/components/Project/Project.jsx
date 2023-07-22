import { boolType, stringType } from '../../constatnts/prop-types';
import TeamProject from "../TeamProject/TeamProject";
import Deadline from "../Deadline/Deadline";


export default function Project({ title, start, finish, isActive }) {
  return (
    <form className='project'>
      <div className='project__list-name'>{title}</div>
      <div className="project__list-name"><Deadline  start={start} finish={finish}/></div>
      <div className='project__list-name'>
        <div className='project__list-member'>
          <TeamProject />
        </div>
      </div>
      <div className='project__list-name'>
        <div className={
              isActive
                ? 'project__list-status-active'
                : 'project__list-status-close'
            }>{isActive ? "Активен" : "Завершен"}</div>
      </div>
    </form>
  );
}

Project.propTypes = {
  title: stringType,
  start: stringType,
  finish: stringType,
  isActive: boolType
};
