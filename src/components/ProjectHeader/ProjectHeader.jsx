import '../../scss/components/projectHeader.scss';
import { NavLink } from "react-router-dom";

export default function ProjectHeader() {
  return (
    <div className='projectHeader'>
      <div className='projectHeader__content'>
        <h2 className='projectHeader__header'>
          Калькулятор
          <span className='projectHeader__status'>Активен</span>
        </h2>
        <div className='projectHeader__container'>
          <p className='projectHeader__projectTimeline'>
            Сроки проекта: 14.07.23 – 11.02.24
          </p>
          <p className='projectHeader__team'>Команда:</p>
        </div>
      </div>
      <NavLink to="/project"> 
      <button className='projectHeader__button' />
      </NavLink>
    </div>
  );
}
