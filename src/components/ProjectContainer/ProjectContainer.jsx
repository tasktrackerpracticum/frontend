import TaskContainer from "../TaskContainer/TaskContainer";
import { projectContainers } from "../../constatnts/constants"; //удалить MockTasks после получения данных с сервера
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchTasks } from "../../services/tasksSlice";

export default function ProjectContainer() {

  // const dispatch = useDispatch();
  // const { status, error } = useSelector(state => state.tasks); //лучше убрать деструктуризацию
  const tasks = groupBy(useSelector(state => state.tasks.tasks), "column");

  // const project_id = 1; //Запрос за данными временный. Убрать после настройки авторизации

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  };

  // useEffect(() => {
  //   dispatch(fetchTasks({project_id}))
  // }, [dispatch]);

  // const tasks = groupBy(MockTasks, "column");

  return(
    <div className="projectContainer">
      {/*{status === 'loading' && <h2>loading...</h2>} {/* потом добавить спиннер и убрать */}
      {/*{error && <h2>{error}</h2>}                   {/* потом добавить модалку ошибки и убрать */}
      {(projectContainers.length !== 0 && Object.keys(tasks).length !== 0 ) && (projectContainers.map((item, i) => {
        if (item.value === 'Беклог') {
          return (
            <TaskContainer
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
        }
      }))
      }
    </div>
  )
}

// return(
//   <div className="projectContainer">
//     {/*{status === 'loading' && <h2>loading...</h2>} {/* потом добавить спиннер и убрать */}
//     {/*{error && <h2>{error}</h2>}                   {/* потом добавить модалку ошибки и убрать */}
//     {(projectContainers.length !== 0 && Object.keys(tasks).length !== 0 ) && (projectContainers.map((item, i) => {
//       if (item.value === 'Беклог') {
//         return (
//           <TaskContainer
//             tasks={tasks.backlog}
//             taskHeader={item.value}
//             key={i} />
//         )
//       } else if (item.value === 'В работе') {
//         return (
//           <TaskContainer
//           tasks={tasks.at_work}
//           taskHeader={item.value}
//           key={i} />
//         )
//       } else if (item.value === 'Тестирование') {
//         return (
//           <TaskContainer
//           tasks={tasks.testing}
//           taskHeader={item.value}
//           key={i} />
//         )
//       } else if (item.value === 'Завершено') {
//         return (
//           <TaskContainer
//           tasks={tasks.done}
//           taskHeader={item.value}
//           key={i} />
//         )
//       }
//     }))
//     }
//   </div>
// )
