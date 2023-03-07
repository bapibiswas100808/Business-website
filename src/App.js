import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterBottom from './Components/Footer/FooterBottom';
import FooterTop from './Components/Footer/FooterTop';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      </Routes>
      <FooterTop/>
      <FooterBottom/>
       </div>
  );
}

export default App;
