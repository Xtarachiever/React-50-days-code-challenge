import './App.css';
import Navbar from './components/NavBar/navbar';
import Home from './components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
