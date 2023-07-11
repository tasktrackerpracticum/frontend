import '../../scss/components/notFoundPage.scss';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className='not-found-page'>
      <h1 className='not-found-page__title'>404</h1>
      <p className='not-found-page__text'>Страница не найдена</p>
      <NavLink className='not-found-page__link' to='/'>
        Назад
      </NavLink>
    </section>
  );
}

export default NotFoundPage;
