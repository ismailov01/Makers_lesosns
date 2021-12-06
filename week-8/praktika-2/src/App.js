import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import UserGreet from './components/UserGreet/UserGreet';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="content">
    {/* // <Counter/> */}
    {/* // <UserGreet /> */}
    <SideBar place="left"/>
    <SideBar place="right"/>
    </div>
  );
}

export default App;
