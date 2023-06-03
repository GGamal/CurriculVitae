import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneralPagina from './paginas/GeneralPagina';
// import Footer from './componentes/Footer';
import NavBar from './componentes/Navbar';
import './App.css';




function App() {
  return (
    <Router>
    <NavBar></NavBar>
    <Routes>

      <Route  path="/" Component={GeneralPagina} />
      
    </Routes>

    {/* <Footer></Footer> */}

  </Router>
  );
}

export default App;
