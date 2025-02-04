import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import './input.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './mycomponents/Home';
import { Header } from './mycomponents/Header';
import { Grid } from './mycomponents/Grid';



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/grid" element={<Grid />} />
    </Routes>
  </BrowserRouter>
);

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
