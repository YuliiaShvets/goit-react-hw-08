import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "modern-normalize";
import { BrowserRouter } from "react-router";
import { Provider } from 'react-redux';
import { persistor, store } from "./redux/store.js"
import { PersistGate } from 'redux-persist/es/integration/react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
        <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
