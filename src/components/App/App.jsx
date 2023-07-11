import { Route, Switch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Main from "../Main/Main.jsx";

function App() {
  const { handleLogin, handleRegister } = useAuth();

  return (
    <>
      <div className='page'>
        <div className='page__container'>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Main />

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
