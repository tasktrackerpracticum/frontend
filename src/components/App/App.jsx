import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Main from '../Main/Main.jsx';
import Profile from '../Profile/Profile.jsx';
import CreateProject from '../CreateProject/CreateProject';
import CreateTask from '../CreateTask/CreateTask';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { useDispatch, useSelector } from 'react-redux';
import { PROJECTS, SIGN_IN, FORGOT_PASSWORD } from '../../constatnts/constants.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Projects from '../Projects/Projects';
import ModalEditAvatar from '../ModalEditAvatar/ModalEditAvatar';
import { fetchUsers } from '../../services/usersSlice';
import { fetchProjects } from '../../services/projectsSlice';

function App() {
  const token = localStorage.getItem('accessToken');
  const { handleLogin, handleLogout, isLoggedIn, resStatus, handleResStatus } = useAuth();
  const [profileActive, setProfileActive] = useState(false);
  const [isOpenProjectCreate, setOpenProjectCreate] = useState(false);
  const [isOpenTaskCreate, setOpenTaskCreate] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.profile)

  useEffect(() => {
   if (token) {
     dispatch(fetchUsers());
     dispatch(fetchProjects());
   }
  }, [dispatch, token]);

  function openProjectCreate()  {
    setOpenProjectCreate(!isOpenProjectCreate);
  }

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
          {isLoggedIn && (
            <>
              <Header active={profileActive} setActive={setProfileActive} onLogout={handleLogout} />
              <Profile active={profileActive} setActive={setProfileActive}  openModalAvatar={openModalAvatar}/>
              <ModalEditAvatar activeModal={openModalAvatar} active={activeModalAvatar} />
              <CreateProject active={isOpenProjectCreate} setActive={setOpenProjectCreate} />
              <CreateTask active={isOpenTaskCreate} setActive={setOpenTaskCreate} />
            </>
          )}
          <Routes>
            <Route path='input'></Route>
            <Route exact path='/' element={ <ProtectedRoute isLoggedIn={token ? true : false} components={
              <Projects openProjectCreate={openProjectCreate} />} />
            }/>
            <Route path={`${PROJECTS}/:id`} element={ <ProtectedRoute isLoggedIn={token ? true : false} components={
              <Main openProjectCreate={openProjectCreate} openTaskCreate={openTaskCreate} />} />
            }/>
            <Route path={SIGN_IN} element={ !isLoggedIn ? <Login onLogin={handleLogin} resStatus={resStatus} setResStatus={handleResStatus} /> : <Navigate to='/' /> 
            }/>
            <Route path={FORGOT_PASSWORD} element={<ForgetPassword />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
