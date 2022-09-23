import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import ButtonAppBar from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ButtonAppBar />
        <Router />
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
