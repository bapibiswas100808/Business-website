import './App.css';
import FooterBottom from './Components/Footer/FooterBottom';
import FooterTop from './Components/Footer/FooterTop';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Slider from './Components/Slider/Slider';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Services/>
      <FooterTop/>
      <FooterBottom/>
       </div>
  );
}

export default App;
