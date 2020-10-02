import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import User from './pages/user.js';
import MainPage from "./pages/main-page";

function App() {
  return (
    <div className="App">
     <Header/>
     <MainPage/>
    </div>
  );
}

export default App;
