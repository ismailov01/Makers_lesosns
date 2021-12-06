import React from 'react';
import Child from './Child';

const Parent = () => {
    const getName = (param) => {
        console.log(param, "<-- IN PARENT");
    }
    return (
        <>
         <Child getName={getName} />   
        </>
    );
};

export default Parent;