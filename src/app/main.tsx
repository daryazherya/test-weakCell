import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider } from "effector-react";
import { fork } from 'effector';

const myScope = fork();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider value={myScope}>
            <App />
        </Provider>
    </React.StrictMode>,
)
