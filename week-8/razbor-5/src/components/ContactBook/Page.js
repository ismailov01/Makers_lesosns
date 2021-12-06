import React, { useState } from 'react';
import Input from './Input';
import List from './List';

const Page = () => {
    const [usersList, setUsersList] = useState([])
    const getInp = (newUser) => {
        setUsersList(prev => [...prev, newUser] )
    }
    return (
        <div>
            <Input getInp={getInp} />
            <List usersList={usersList}/>
        </div>
    );
};

export default Page;