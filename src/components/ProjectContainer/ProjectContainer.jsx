import TaskContainer from "../TaskContainer/TaskContainer";
import { projectContainers } from "../../constatnts/constants"; //удалить MockTasks после получения данных с сервера
import { useDispatch } from "react-redux";
import { openType } from '../../constatnts/prop-types';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTasks } from "../../services/tasksSlice";

export default function ProjectContainer({ openTaskCreate }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTasks(id))
  }, [dispatch, id]);

  return(
    <div className="projectContainer">
      {(projectContainers.length !== 0 ) && (projectContainers.map((item, i) => {
        if (item.value === 'Беклог') {
          return (
            <TaskContainer
              openTaskCreate={openTaskCreate}
              boradHeader={item.value}
              column={item.column}
              key={i} />
          )
        } else if (item.value === 'В работе') {
          return (
            <TaskContainer
            boradHeader={item.value}
            column={item.column}
            key={i} />
          )
        } else if (item.value === 'Тестирование') {
          return (
            <TaskContainer
            boradHeader={item.value}
            column={item.column}
            key={i} />
          )
        } else if (item.value === 'Завершено') {
          return (
            <TaskContainer
            boradHeader={item.value}
            column={item.column}
            key={i} />
          )
        } else if (item.value === 'Удалено') {
          return (
            <TaskContainer
            boradHeader={item.value}
            column={item.column}
            key={i} />
          )
        }
      }))
      }
    </div>
  )
}

ProjectContainer.propTypes = {
  openTaskCreate: openType,
};
