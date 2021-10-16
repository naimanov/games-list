import React from 'react';
import GamesListPage from './Pages/GamesListPage';
import ModalOverlay from './Components/Modals/ModalOverlay';
import { Provider } from 'react-redux';

import { store } from './Store/index';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ModalOverlay />
      <GamesListPage />
    </Provider>
  );
}

export default App;
