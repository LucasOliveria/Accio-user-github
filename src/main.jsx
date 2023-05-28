import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import AllRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
)
