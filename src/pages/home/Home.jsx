import React, { useContext } from 'react';

import { ACTIONS, MyContext } from '../../context/context';
import useFetchUser from '../../hooks/use-fetchUser';

function Home() {
  const { state, dispatch } = useContext(MyContext);

  const { fetchUser } = useFetchUser();

  console.log(state);

  return (
    <>
      <head>
        <title>Home Function</title>
      </head>
      <div className="App-header">
        <p>{state.login.username}</p>
        <button
          type="button"
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        >
          +
        </button>
        <p>{state.count.value}</p>
        <button
          type="button"
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
        >
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
