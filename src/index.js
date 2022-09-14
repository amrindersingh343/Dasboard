import React from 'react';
import ReactDOM from 'react-dom/client';
import Store from './Store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({ colors })
root.render(
  <ChakraProvider theme={theme}>
    <Provider store={Store}>
  <React.StrictMode>

    <App />
  </React.StrictMode>
  </Provider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
