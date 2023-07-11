import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../scss/components/app.scss';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header.jsx';
import SideNavigation from '../SideNavigation/SideNavigation.jsx';
import Menu from '../Menu/Menu.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const { handleLogin, handleRegister } = useAuth();

  return (
    <>
      <div className='page'>
        <div className='page__container'>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
              <SideNavigation active={menuActive} setActive={setMenuActive} />
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
