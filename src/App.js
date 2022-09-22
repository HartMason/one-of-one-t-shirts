import "./App.css";
import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
