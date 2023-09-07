import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home'
import Hizmetler from './pages/Hizmetler'
import Hakkimizda from './pages/Hakkimizda'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hizmetlerimiz' element={<Hizmetler/>} />
        <Route path='/hakkimizda' element={<Hakkimizda/>} />
      </Routes>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
