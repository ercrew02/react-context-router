import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchUser from '../../hooks/use-fetchUser';
import { decrement, increment } from '../../store/count-slice';

function Home() {
  // setter
  const dispatch = useDispatch();

  // getter
  const { value } = useSelector((state) => state.count);
  const { token } = useSelector((state) => state.login);

  const { fetchUser } = useFetchUser();

  return (
    <>
      <head>
        <title>Home Function</title>
      </head>
      <div className="App-header">
        <div>{token}</div>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <p>{value}</p>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => fetchUser()}>
          Get User
        </button>
      </div>
    </>
  );
}

export default Home;
