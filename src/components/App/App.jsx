import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Main from '../Main/Main.jsx';
import Profile from '../Profile/Profile.jsx';
import CreateProject from '../CreateProject/CreateProject';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from '../../services/profileSlice';
import { SIGN_IN } from '../../constatnts/constants.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const token = localStorage.getItem('accessToken');
  const { handleLogin, handleLogout, isLoggedIn } = useAuth();
  const [profileActive, setProfileActive] = useState(false);
  const [isOpenTaskCreate, setOpenTaskCreate] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.profile)

  //  const email = "admin@admin.com";
  //  const password = "admin";
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
          <Routes>
            <Route exact path='/' element={
              <ProtectedRoute isLoggedIn={token} components={(
                <>
                  <Header active={profileActive} setActive={setProfileActive} onLogout={handleLogout} />
                  <Profile active={profileActive} setActive={setProfileActive} />
                  <CreateProject active={isOpenTaskCreate} setActive={setOpenTaskCreate}/>
                  <Main openTaskCreate={openTaskCreate} active={isOpenTaskCreate}  setActive={setOpenTaskCreate}/>
                </>
              )}
              />
            }
            />
            <Route path={SIGN_IN} element={
              !isLoggedIn ?
                <Login onLogin={handleLogin} />
              :
                <Navigate to='/' />
              }
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
