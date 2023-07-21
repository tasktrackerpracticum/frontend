import React from 'react';
import { useHistory } from 'react-router-dom';
import * as MainApi from '../utils/MainApi';
import { getToken } from '../utils/TokenApi';
import { SIGN_IN } from '../constatnts/constants.js';

function useAuth() {
	const token = localStorage.getItem('accessToken');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [resStatus, setResStatus] = React.useState('');

  const history = useHistory();

  const handleLogin = (email, password) => {
    getToken(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        setResStatus('');
				localStorage.setItem('refreshToken', res.refresh);
      	localStorage.setItem('accessToken', res.access);
        history.push('/');
      })
      .catch((err) => {
        setResStatus(err);
      });
  };

  const handleRegister = (email, password) => {
    MainApi.register(email, password)
      .then(() => {
        handleLogin(email, password);
        setResStatus('');
      })
      .catch((err) => {
        setResStatus(err);
      });
  };

	const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push(SIGN_IN);
  };

  const handleResStatus = () => {
    setResStatus('');
  };

	React.useEffect(() => {
		if (token) {
			setIsLoggedIn(true)
		}
  }, []);

  return {
    resStatus,
    isLoggedIn,
    handleLogin,
    handleRegister,
		handleLogout,
    handleResStatus,
  };
}

export default useAuth;
