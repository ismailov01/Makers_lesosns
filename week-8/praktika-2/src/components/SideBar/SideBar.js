import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
    // console.log(props);


    return (
        <div style={{
            'backgroundColor':
                props.place === 'left' ? 'red': 'grey'
        }} className="sidebar">Sidebar</div>
    );
};

export default SideBar;