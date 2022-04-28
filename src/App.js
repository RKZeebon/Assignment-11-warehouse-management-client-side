import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/CommonPages/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
