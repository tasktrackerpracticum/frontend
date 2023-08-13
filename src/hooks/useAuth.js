import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/TokenApi';
import { SIGN_IN } from '../constatnts/constants.js';

function useAuth() {
	const token = localStorage.getItem('accessToken');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [resStatus, setResStatus] = React.useState('');

  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    getToken(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        setResStatus('');
				localStorage.setItem('refreshToken', res.refresh);
      	localStorage.setItem('accessToken', res.access);
        navigate.push('/');
      })
      .catch((err) => {
        setResStatus(err);
      });
  };

	const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate.push(SIGN_IN);
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
		handleLogout,
    handleResStatus,
  };
}

export default useAuth;
