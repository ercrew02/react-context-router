import React, { useContext } from 'react';
import { MyContext } from '../../context/context';

function About() {
  const { state } = useContext(MyContext);

  return (
    <>
      <head>
        <title>About</title>
      </head>
      <div>{state.count.value}</div>
      {state.user.map((item) => (
        <div className="List-user">
          <h1>{item.name}</h1>
          <h2>{item.phone}</h2>
          <h3>{item.username}</h3>
        </div>
      ))}
    </>
  );
}

export default About;
