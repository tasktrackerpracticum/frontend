import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Main from '../Main/Main.jsx';
import Profile from '../Profile/Profile.jsx';
import CreateProject from '../CreateProject/CreateProject';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from '../../services/profileSlice';
import { SIGN_IN, SIGN_UP } from '../../constatnts/constants.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const token = localStorage.getItem('accessToken');
  const { handleLogin, handleRegister, handleLogout, isLoggedIn } = useAuth();
  const [profileActive, setProfileActive] = useState(false);
  const [isOpenTaskCreate, setOpenTaskCreate] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.profile)

  // const email = "admin@admin.com";
  // const password = "admin";
//Запрос токена с админскими данными временный. Убрать после настройки авторизации
  useEffect(() => {
    dispatch(fetchToken())
  }, [dispatch]);


  function openTaskCreate()  {
    setOpenTaskCreate(!isOpenTaskCreate);
  }

  return (
    <>
      <div className='page'>

      {status === 'loading' && <h2>loading...</h2>}
      {error && <h2>{error}</h2>}

        <div className='page__container'>
          <Switch>
            <ProtectedRoute exact path='/' isLoggedIn={token} components={(
              <>
                <Header active={profileActive} setActive={setProfileActive} onLogout={handleLogout} />
                <Profile active={profileActive} setActive={setProfileActive} />
                <CreateProject active={isOpenTaskCreate} setActive={setOpenTaskCreate}/>
                <Main openTaskCreate={openTaskCreate} active={isOpenTaskCreate}  setActive={setOpenTaskCreate}/>
              </>
              )}
            />
            <Route path={SIGN_UP}>
              {!isLoggedIn ?
                <Register onRegister={handleRegister} />
              :
                <Redirect to='/' />
              }
            </Route>
            <Route path={SIGN_IN}>
              {!isLoggedIn ?
                <Login onLogin={handleLogin} />
              :
                <Redirect to='/' />
              }
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
