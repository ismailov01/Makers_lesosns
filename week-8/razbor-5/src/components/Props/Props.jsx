import React from "react";

const Props = ({ name = 'Ben', color }) => {
  return (
    <div>
      <h1 style={{color: color}}>Hello {name}!</h1>
      <h2 >How are you?</h2>
    </div>
  );
};

export default Props;
