import React from 'react';

const Child = ({getName}) => {
    let name = 'Sam'
    getName(name)
    return (
        <div>
            Child
        </div>
    );
};

export default Child;