import Signup from './Signup.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import AddCar from './Dealer.js';
import Cars from './Filter.js';
import ManageCars from './EditCars.js';

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
