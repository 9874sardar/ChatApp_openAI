import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query/index.js'
import { pokemonApi } from 'tariq/state/api.js'

export const store = configureStore({
    reducer : { [pokemonApi.reducerPath] : pokemonApi.reducer},
    middleware: (getDefault) => getDefault().concat(pokemonApi.middleware)
})
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App/>
</Provider>
)
