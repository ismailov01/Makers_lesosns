import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function getInitialState(){
    console.log('**********');
    return new Date().getDate()
}

const Counter = () => {
  const [counter, setCounter] = useState(() => getInitialState())

    const [person, setPerson] = useState({
        name: 'John', lastName: 'Snow'
    })

    function increment() {
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }
    function changePerson(){
        setPerson((prev) => {
            return {
                ...prev,
                name: 'Emily'
            }
        })
    }
    return (
        <div>
            <h1>
            Счётчик:
            {counter}
            </h1>
            
            <Button onClick={increment} className="btn btn-warning">+</Button>
            <Button onClick={decrement} className="btn btn-danger">-</Button>
            <Button onClick={changePerson} className="btn btn-warning">Change Name</Button>
            <p>{JSON.stringify(person)}</p>
        </div>
    );
};

export default Counter;