import './App.css';
import Navbar from './components/NavBar/navbar';
import Home from './components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Login/>
        }/>
        <Route path='/home' element={
          <>
          <Navbar/>
          <Home/>
          </>
        }/>
        <Route path='/checkout' element={
          <>
          <Navbar/>
          <Checkout/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
