import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.tsx';

ReactDOM.render(
    <BrowserRouter basename="/icolor">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
