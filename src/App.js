import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ChooseParking from './components/ChooseParking';
import AllParking from './components/AllParking';
import History from './components/History';
import Menu from './components/Menu';

function App() {

  const [users, setUsers] = useState([]);
  const [showMenu, setShowMenu] = useState(false)
  const [index, setIndex] = useState();

  const addUser = (userName, carNumber, carType, password) => {
    setUsers([...users, { userName, carNumber, carType, password, parking: {}, parkingHistory:[] }])
  }

  const show = () => {
    if (showMenu) {
      return <Menu setShowMenu={setShowMenu} />
    }
  }

  const addParking = (parking) => {
    users[index].parking = parking;
    setUsers([...users]);
  }

  const moveToHistory = ()=>{
    users[index].parkingHistory.push(users[index].parking);
    users[index].parking = {};
    setUsers([...users]);
  }

  return (
    <div className="App">
      <h1>SV parking</h1>
      <BrowserRouter>
        {show()}
        <Routes>
          <Route path='/' element={<SignIn users={users} setShowMenu={setShowMenu} setIndex={setIndex} />} />
          <Route path='/signup' element={<SignUp addUser={addUser} />} />
          <Route path='/chooseParking' element={<ChooseParking index={index} users={users} addParking={addParking}/>} />
          <Route path='/allParking' element={<AllParking users={users[index]} moveToHistory={moveToHistory}/>} />
          <Route path='/history' element={<History users={users} index={index} setUsers={setUsers}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
