import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ContextProvider } from './context/context';

import AppRoutes from './routes/AppRoutes';

import { store } from './store/Store';

function App() {
  return (
    <ContextProvider>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ContextProvider>
  );
}

export default App;
