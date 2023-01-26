/* eslint-disable */
// ** React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './store/index'

// ** Router Imports
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
