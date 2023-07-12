import "../../scss/components/project.scss";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

export default function Project() {

  return(
    <section className="project">
      <div className="project__wrap"> 
  
      <div className="project__create">
        <button className="project__create-btn">
        <div className="project__icon-create" />
          Новый проект</button>
      </div>
      <div className="project__content">
        <div className="project__tag">
      <h2 className="project__tag-name">Название</h2>
      <h2 className="project__tag-name">Дата проведения</h2>
      <h2 className="project__tag-name">Участник</h2>
      <h2 className="project__tag-name">Статус</h2>
        </div>
        <div className="project__list">
          <div className="project__container">
            <div className="project__list-name">Имя проекта</div>
            <div className="project__list-name">16.06.2023 - 16.07.2023</div>
            <div className="project__list-name">
              <div className="project__list-member">

              </div>
            </div>
            <div className="project__list-name">
              <div className="project__list-status">
                Активен
              </div>
            </div>
          </div>
        </div>
      </div>


      </div>
    </section>
  )
}
