import './App.css';
import Navbar from './components/NavBar/navbar';
import Home from './components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
