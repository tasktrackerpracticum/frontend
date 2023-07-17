import { openType, objectType, functionType } from '../../constatnts/prop-types';

export default function ListProject({
  isOpen,
  setOpen,
  projects,
  status,
  error,
  onClick,
}) {
  const openProject = (evt) => {
    const project = evt;
    onClick(project);
  };
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
      {status === 'loading' && <h2>loading...</h2>}{' '}
      {/* потом добавить спиннер и убрать */}
      {error && <h2>{error}</h2>} {/* потом добавить модалку ошибки и убрать */}
      <div className='listProject__content'>
        {/* потом добавить компонент вместо вставки разметки. Либо сделать на роуте со списком проектов с модалкой справа, чтобы не запрашивать список проектов */}

        {projects.length !== 0 &&
          projects.map((item) => {
            return (
              <div
                key={item.id}
                className='listProject__container'
                onClick={() => openProject(item)}
              >
                <div className='listProject__project-title'>{item.title}</div>
                <div className='listProject__project-info'>
                  <div className='listProject__project-time'>
                    16.06.2023-16.06.2023
                  </div>
                  <div className='listProject__wrap'>
                    <div className='listProject__project-member'>...</div>

                    <div
                      className={
                        item.is_active
                          ? 'listProject__project-status-actived'
                          : 'listProject__project-status-closed'}>
                      {item.is_active ? 'Активен' : 'Завершен'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

ListProject.propTypes = {
  isOpen: openType,
  setOpen: openType,
  projects: objectType,
  onClick: functionType,
  status: objectType,
  error: objectType
};
