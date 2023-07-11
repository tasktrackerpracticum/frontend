import "../../scss/components/projectHeader.scss";

export default function ProjectHeader() {

  return(
    <div className="projectHeader">
      <button className="projectHeader__button">Свернуть</button>
      <h2 className="projectHeader__header">Калькулятор
        <span className="projectHeader__status">Активен</span>
      </h2>
      <div className="projectHeader__container">
        <p className="projectHeader__projectTimeline">Сроки проекта: 14.07.23 – 11.02.24</p>
        <p className="projectHeader__team">Команда:</p>
      </div>
    </div>
  )
}
