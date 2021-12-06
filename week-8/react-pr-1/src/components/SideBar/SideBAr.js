import React from 'react';
import './SideBar.css'

const SideBAr = (props) => {
    console.log(props);
    return (
        <div style={{
            'backgroundColor': 
                props.place === 'left' ? 'green' : 'gray'
        }} className="sideBar">
            Sidebar
        </div>
    );
};

export default SideBAr;