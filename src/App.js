import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/CommonPages/Footer/Footer';
import Navbar from './Components/CommonPages/Navbar/Navbar';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory/:id' element={<Inventory />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
