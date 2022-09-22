import "./App.css";
import Footer from "./components/Footer";
import backGround from "./image/backGround.jpg";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import ButtonAppBar from "./components/Navigation";

function App() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backGround})`,
        position: "fixed",
        minWidth: "100%",
        backgroundSize: "contain",
        // backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
      }}
    >
      <BrowserRouter>
        <ButtonAppBar />
        <Router />

        <Footer />
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
