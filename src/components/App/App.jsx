import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
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
import ModalEditAvatar from '../ModalEditAvatar/ModalEditAvatar';
import { fetchUsers } from '../../services/usersSlice';

function App() {
  const token = localStorage.getItem('accessToken');
  const { handleLogin, handleRegister, handleLogout, isLoggedIn } = useAuth();
  const [profileActive, setProfileActive] = useState(false);
  const [isOpenTaskCreate, setOpenTaskCreate] = useState(false);


  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.profile)

	



   const email = "admin@admin.com";
   const password = "admin";
//Запрос токена с админскими данными временный. Убрать после настройки авторизации
  useEffect(() => {
    dispatch(fetchToken({email, password}))
    dispatch(fetchUsers());
  }, [dispatch]);


  function openTaskCreate()  {
    setOpenTaskCreate(!isOpenTaskCreate);
  }

  const [activeModalAvatar, setActiveModalAvatar] = useState(false);

  const openModalAvatar = () => {
    setActiveModalAvatar(!activeModalAvatar);
  }

  const closeModal = () => {
    setActiveModalAvatar(false);
    setProfileActive(false);
    setOpenTaskCreate(false);
  }


  return (
    <>
      <div className='page' onClick={closeModal}>

      {status === 'loading' && <h2>loading...</h2>}
      {error && <h2>{error}</h2>}

        <div className='page__container' onClick={(e) => e.stopPropagation()}>
          <Routes>
            <Route path='input'>
            </Route>
            <Route exact path='/' element={
              <ProtectedRoute isLoggedIn={token} components={(
                <>
                  <Header active={profileActive} setActive={setProfileActive} onLogout={handleLogout} />
                  <Profile active={profileActive} setActive={setProfileActive} openModalAvatar={openModalAvatar}/>
                  <ModalEditAvatar activeModal={openModalAvatar} active={activeModalAvatar}/>
                  <CreateProject active={isOpenTaskCreate} setActive={setOpenTaskCreate}/>
                  <Main openTaskCreate={openTaskCreate} closeModal={closeModal}/>
                </>
              )}
              />
            }
            />
            <Route path={SIGN_UP} element={
              !isLoggedIn ?
                <Register onRegister={handleRegister} />
              :
                <Navigate to='/' />
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
