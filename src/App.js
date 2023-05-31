import './App.css';
import './media.css';
import MainPage from './MainPage';
import {BrowserRouter as Router, Routes, Route,Switch, BrowserRouter } from 'react-router-dom';
import AccountPage from './AccountPage';



function App() {
  return (
    <div className="App">
      <MainPage/>

      <Routes>
        <Route path='/' element={<MainPage/>} /> 
         <Route path='/account' element={<AccountPage/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
