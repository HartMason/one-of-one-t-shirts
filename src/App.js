import "./App.css";
import ResponsiveAppBar from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
