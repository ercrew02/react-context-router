import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import './App.css';

import AppRoutes from './routes/AppRoutes';

import { store } from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
