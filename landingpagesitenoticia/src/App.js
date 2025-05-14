import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // ajuste o caminho conforme necessário
import AllArticles from './pages/AllArticles'; // ajuste o caminho conforme necessário


import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allarticles" element={<AllArticles />} />
      </Routes>
    </Router>
  );
}

export default App;
