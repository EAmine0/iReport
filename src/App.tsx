import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Router from './components/Router/Router';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter } from 'react-router-dom';
import BtnExport from './components/Button/BtnExport';
import BtnEx from './components/Button/BtnEx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <SideBar/>
        {/* <BtnExport /> */}
        <BtnEx/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
