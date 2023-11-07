import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Home from './pages/Home';
import Artists from './pages/Artists';
import Songs from './pages/Songs';
import { Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
      </div>
    </>
  )
}

export default App;
