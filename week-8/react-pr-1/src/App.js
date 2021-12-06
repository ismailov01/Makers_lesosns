import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import Counter from "./components/Counter/Counter";
import UserGreet from "./components/UserGreet/UserGreet";
import SideBAr from "./components/SideBar/SideBAr";

function App() {
  

  return (
    <div className="content">
    <SideBAr place="left" />
    <SideBAr place="right"/>
    </div>
  );
};

export default App;
