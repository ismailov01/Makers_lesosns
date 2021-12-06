import React, { useState } from 'react';

function getInitialState(){
    console.log('*******');
    return new Date().getDate()
}

const Counter = () => {
    const [counter, setCounter] = useState(() => getInitialState())
    const [person, setPerson] = useState({
        name: 'John',
        lasName: 'Snow'
    })

    function increment(){
        setCounter((prevState) => prevState + 1)
        setCounter((prevState) => prevState + 1)

    }
    function dicrement(){
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
            <h1>Счётчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">+</button>
            <button onClick={dicrement} className="btn btn-danger">-</button>
            <button onClick={changePerson} className="btn btn-warning">Change name</button>

            <p>{JSON.stringify(person)}</p>
        </div>
    );
};

export default Counter;