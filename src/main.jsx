/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ** Redux
import { Provider } from 'react-redux'

import { store } from './store/index'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
