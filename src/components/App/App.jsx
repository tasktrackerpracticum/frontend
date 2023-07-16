import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Main from '../Main/Main.jsx';
import Profile from '../Profile/Profile.jsx';
import Project from '../Project/Project.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from '../../services/profileSlice';

function App() {
  const { handleLogin, handleRegister } = useAuth();
  const [profileActive, setProfileActive] = useState(false);
  const [isOpenTaskCreate, setOpenTaskCreate] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.profile)

  const email = "admin@admin.com";
  const password = "admin";
//Запрос токена с админскими данными временный. Убрать после настройки авторизации
  useEffect(() => {
    dispatch(fetchToken({email, password}))
  }, [dispatch]);

  return (
    <>
      <div className='page'>

      {status === 'loading' && <h2>loading...</h2>}
      {error && <h2>{error}</h2>}

        <div className='page__container'>
          <Switch>
            <Route exact path='/'>
              <Header active={profileActive} setActive={setProfileActive} />
              <Profile active={profileActive} setActive={setProfileActive} />
              <Main />
            </Route>
            <Route exact path='/project'>
              <Header active={profileActive} setActive={setProfileActive} />
              <Profile active={profileActive} setActive={setProfileActive} />
              <Project isOpen={isOpenTaskCreate} setOpen={setOpenTaskCreate} />
            </Route>
            <Route path='/register' onRegister={handleRegister}>
              <Register />
            </Route>
            <Route path='/login' onLogin={handleLogin}>
              <Login />
            </Route>
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}
export default App;
