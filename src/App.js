/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Calculator from './components/pages/Calculator';
import Quote from './components/pages/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
