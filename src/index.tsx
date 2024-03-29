import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SecondPage from "./SecondPage";

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="second-page" element={<SecondPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
