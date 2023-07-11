import React from 'react';
import { useHistory } from 'react-router-dom';
import * as MainApi from '../utils/MainApi';

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [resStatus, setResStatus] = React.useState('');

  const history = useHistory();

  const handleLogin = ({ email, password }) => {
    MainApi.login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        setResStatus('');
        history('/');
      })
      .catch((err) => {
        setResStatus(err);
      });
  };

  const handleRegister = ({ email, password }) => {
    MainApi.register(email, password)
      .then(() => {
        handleLogin({ email, password });
        setResStatus('');
      })
      .catch((err) => {
        setResStatus(err);
      });
  };

  const handleResStatus = () => {
    setResStatus('');
  };

  return {
    resStatus,
    isLoggedIn,
    handleLogin,
    handleRegister,
    handleResStatus,
  };
}

export default useAuth;
