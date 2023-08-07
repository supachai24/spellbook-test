import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouters from './routes/AppRouters';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
}

export default App;
