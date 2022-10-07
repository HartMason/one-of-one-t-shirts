import "./App.css";
import React from "react";
import Router from "./Router";
import Navigation from "./containers/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// background-size: 'contain',
// background-size: 'cover',
// background-position: 'center',
// background-repeat: 'no-repeat',
// min-height: '100%'
