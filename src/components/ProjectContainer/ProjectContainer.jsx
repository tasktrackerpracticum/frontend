import TaskContainer from "../TaskContainer/TaskContainer";
import { projectContainers } from "../../constatnts/constants"; 

export default function ProjectContainer() {

  return(
    <div className="projectContainer">
      {projectContainers.length !== 0 && (projectContainers.map((item) =>
        <TaskContainer
          taskHeader={item.value}
          key={item.index} />))
      }
    </div>
  )
}

