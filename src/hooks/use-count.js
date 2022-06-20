import React, { useContext } from 'react';
import { ACTIONS, MyContext } from '../context/context';

function useCount() {
  const { dispatch } = useContext(MyContext);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT, payload: { count: +1 } });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT, payload: { count: -1 } });
  };

  return { increment, decrement };
}

export default useCount;
