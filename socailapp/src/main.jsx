import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/configureStore.js'
import UserAuthenticationContextProvider from './context/UserAuthenticationContextProvider.jsx'
import ThemeSwitcherContextProvider from './context/ThemeSwitcherContext/ThemeSwitcherContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
<ThemeSwitcherContextProvider>
    <App />
</ThemeSwitcherContextProvider>
  </Provider>
)

