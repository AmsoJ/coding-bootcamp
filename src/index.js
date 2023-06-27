import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './assets/GlobalHooks/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/paint/index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <AppProvider>
        <App />
    </AppProvider>
)