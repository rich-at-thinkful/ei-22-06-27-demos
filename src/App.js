import logo from './logo.svg';
import './App.css';
import React from 'react';
import WelcomeList from "./WelcomeList";
import Header from './Header';
import Footer from './Footer';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Outside the WelcomeList</p>
      <Notifications notifications={["You have mail", "You have messages"]} />
      <WelcomeList />
      <Footer />
    </div>
  );
}

export default App;

