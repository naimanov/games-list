import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import GamesList from '../Components/GamesList/GamesList';
import ModalAdd from '../Components/Modals/ModalAdd';
import ModalChangePosition from '../Components/Modals/ModalChangePosition';
import { useTypedSelector } from '../Hooks/useTypedSelector';

function GamesListPage() {
  const modalType = useTypedSelector((state) => state.gamesReducer.modal_type);
  return (
    <div className='main-container'>
      {modalType === 'add' && <ModalAdd />}
      {modalType === 'change-position' && <ModalChangePosition />}
      <Navbar />
      <GamesList />
    </div>
  );
}

export default GamesListPage;
