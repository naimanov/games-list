import React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../Store/Actions';
import gameList from '../../Data/mockJSON.json';

function GamesListButtons() {
  const dispatch = useDispatch();

  const addGame = () => {
    dispatch({ type: Actions.OPEN_ADD_MODAL });
  };

  // const query =
  //   'https://pcg-appstore.s3.amazonaws.com/applications_for_import.json';
  //
  // const downloadGameList = async () => {
  //   try {
  //     const response = await fetch(query);
  //     const gameList = await response.json();
  //     dispatch({ type: Actions.GET_DOWNLOAD_GAME_LIST, payload: gameList.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const downloadGameList = () => {
    dispatch({ type: Actions.GET_DOWNLOAD_GAME_LIST, payload: gameList.data });
  };

  return (
    <div className='list-buttons-container'>
      <button className='button list-button' onClick={addGame}>
        Добавить
      </button>
      <button className='button list-button' onClick={downloadGameList}>
        Загрузить
      </button>
    </div>
  );
}

export default GamesListButtons;
