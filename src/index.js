import React from 'react';
import ReactDOM from 'react-dom/client';
import {CardProvider} from "./context/card.context";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CardProvider>
            <App/>
        </CardProvider>
    </BrowserRouter>
);
