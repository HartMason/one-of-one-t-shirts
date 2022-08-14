import "./App.css";
import ResponsiveAppBar from "./Header";
import { BrowserRouter } from "react-router-dom";

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
