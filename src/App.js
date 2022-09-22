import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import backGround from "./image/backGround.jpg"

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";


function App() {
  return (
    <div className="backgroundImage" style={{ backgroundImage: `url(${backGround})`,
    position: 'fixed',
    minWidth: '100%',
    // backgroundSize: 'contain',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100%'
  }}>
      <BrowserRouter>
      <Navbar />
        <Router />

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

// background-size: 'contain',
// background-size: 'cover',
// background-position: 'center',
// background-repeat: 'no-repeat',
// min-height: '100%'