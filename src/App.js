import  {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar></Navbar>
     {/* <Routes>
        <Route excat path="/" element={<Home />} > </Route>
      </Routes>
    */}
     <Footer></Footer>
    </div>
  </Router>
  );
}

export default App;
