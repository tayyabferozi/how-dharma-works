import React, { Component } from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Magic from "./components/Magic/Magic";
import Upload from "./components/Upload/Upload";
import Compound from "./components/Compound/Compound";
import GrowMoney from "./components/GrowMoney/GrowMoney";
import Features from "./components/Features/Features";
import Questions from "./components/Questions/Questions";
import Start from "./components/Start/Start";
import Footer from "./components/Footer/Footer";
import LiveSupport from "./components/UI/LiveSupport/LiveSupport";

class App extends Component {

  render() {
    return (
      <div className="TextCenter">
        <Navbar />
        <Magic />
        <Upload />
        <Compound />
        <GrowMoney />
        <Features />
        <Questions />
        <Start />
        <Footer />
        <LiveSupport />
      </div >
    );
  }
}

export default App;
