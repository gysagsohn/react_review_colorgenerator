import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { BaseColourProvider } from './contexts/baseColourContext.js';
import { CurrentThemeProvider } from './contexts/currentThemeContext.js';
import { DarkModeProvider } from './contexts/darkModeContext.js';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <BaseColourProvider>
          <CurrentThemeProvider>
            <DarkModeProvider>
              <App />
            </DarkModeProvider>
            
          </CurrentThemeProvider>
        </BaseColourProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
