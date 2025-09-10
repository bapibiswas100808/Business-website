import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterBottom from "./Components/Footer/FooterBottom";
import FooterTop from "./Components/Footer/FooterTop";
import Header from "./Components/Header/Header";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import BlogDetails from "./Components/Pages/BlogDetails/BlogDetails";
import ServiceDetails from "./Components/Pages/ServiceDetails/ServiceDetails";
import BookAppointment from "./Components/Pages/BookAppointment/BookAppointment";
import Home from "./Components/Pages/Home/Home";
import Error from "./Components/Pages/Error/Error";
import Registration from "./Components/Registration/Registration";
import SignIn from "./Components/SignIn/SignIn";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div className="floating-button">
        <a
          href="https://wa.me/8801601541414"
          target="_blank"
          rel="noopener noreferrer"
          className="f-btn chat-bubble whatsapp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <a
          href="https://m.me/110404925453586"
          target="_blank"
          rel="noopener noreferrer"
          className="f-btn chat-bubble messenger">
          <i class="fa-brands fa-facebook-messenger"></i>
        </a>
      </div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterTop />
      <FooterBottom />

      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
