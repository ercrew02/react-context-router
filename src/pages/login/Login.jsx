import React from 'react';
import useLogin from '../../hooks/use-login';

function Login() {
  const [user, setUser] = React.useState({
    username: '',
    password: '',
  });
  const { authLogin } = useLogin();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={(e) => authLogin(e, user.username, user.password)}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
