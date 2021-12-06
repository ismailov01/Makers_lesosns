import React, { useState } from "react";
import "./Conditions.css";

const Conditions = () => {
  //   const users = [
  //     { name: "John", age: 19, id: 1 },
  //     { name: "Sam", age: 20, id: 2 },
  //     { name: "Ben", age: 12, id: 3 },
  //   ];

  const [users, steUsers] = useState([
    { name: "John", age: 19, id: 1 },
    { name: "Sam", age: 20, id: 2 },
    { name: "Ben", age: 12, id: 3 },
  ]);

  const delUser = (id) => {
    let arr = [...users]
    arr = arr.filter(item => item.id !== id)
    steUsers(arr) 
}

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className={`${user.age < 18 ? "isNoAdult" : null}`}>
          Name: {user.name}, Age: {user.age}
          <button
          onClick={() =>  delUser(user.id)} 
          disabled={user.age > 18 ? true : false}>
              Delete
              </button>
        </div>
      ))}
    </div>
  );
};

export default Conditions;
