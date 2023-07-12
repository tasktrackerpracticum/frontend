import "../../scss/components/project.scss";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

export default function Project() {

  return(
    <section className="project">
      <ProjectHeader />
      <ProjectContainer />
    </section>
  )
}
