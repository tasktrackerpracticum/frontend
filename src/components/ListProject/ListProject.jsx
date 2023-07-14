import { openFunctionType } from '../../constatnts/prop-types';

export default function ListProject({ isOpen, setOpen }) {
  const itemsTaskList = [
    {
      title: 'Калькулятор 2',
      time: '16.06.2023 - 16.07.2023',
      status: 'Завершен',
    },
  ];

  const openTaskCreate = () => {
    setOpen(!isOpen);
  };

  return (
    <section className='listProject'>
      <div className='listProject__create'>
        <button
          className='listProject__create-btn'
          onClick={openTaskCreate}
        ></button>
      </div>
      <div className='listProject__content'>
        <div className='listProject__container'>
          <div className='listProject__project-title'>Калькулятор</div>
          <div className='listProject__project-info'>
            <div className='listProject__project-time'>
              16.06.2023 - 16.07.2023
            </div>
            <div className='listProject__wrap'>
              <div className='listProject__project-member'>...</div>

              <div className='listProject__project-status'>Активен</div>
            </div>
          </div>
        </div>

       
          {itemsTaskList.map((item) => (
            <div key={item} className='listProject__container'>
              <div className='listProject__project-title'>{item.title}</div>
              <div className='listProject__project-info'>
                <div className='listProject__project-time'>{item.time}</div>
                <div className='listProject__wrap'>
                  <div className='listProject__project-member'>...</div>

                  <div className='listProject__project-status'>
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

ListProject.propTypes = {
    isOpen: openFunctionType,
    setOpen: openFunctionType,
  };
