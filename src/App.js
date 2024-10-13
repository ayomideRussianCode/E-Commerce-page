import './App.css';
import NavBar from './components/navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Shop } from './pages/Shop';
import { ShopCategory } from './pages/ShopCategory';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory/>}/>
      <Route path='/women' element={<ShopCategory/>}/>
      <Route path='/kids' element={<ShopCategory/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
