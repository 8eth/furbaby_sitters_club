import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/SquareKids-LZ5y.ttf";

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
