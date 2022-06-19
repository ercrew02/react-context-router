import React from 'react';
import { useSelector } from 'react-redux';

function About() {
  const { value } = useSelector((state) => state.count);
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <head>
        <title>About</title>
      </head>
      <div>{value}</div>
      {user.map((item) => (
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
