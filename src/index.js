import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BudgetContextProvider from './Context/BudgetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BudgetContextProvider>
            <App />
        </BudgetContextProvider>
    </React.StrictMode>
);