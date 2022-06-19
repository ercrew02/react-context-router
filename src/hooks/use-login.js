import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/fetchUser-slice';
import { setToken, setUsername } from '../store/login-slice';

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authLogin = async (e, username, password) => {
    e.preventDefault();
    const response = await fetch(
      `https://stormy-garden-64397.herokuapp.com/login?username=${username}&password=${password}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    dispatch(setToken(data.token));
    dispatch(setUsername(data.username));
    navigate('/');
  };

  return { authLogin };
}

export default useLogin;
