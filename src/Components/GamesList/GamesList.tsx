import React from 'react';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import GameCards from './GameCards';
import GamesListButtons from './GamesListButtons';
import NoGameMessage from './NoGameMessage';

function GamesList() {
  const games = useTypedSelector((state) => state.gamesReducer.games);

  return (
    <div className='games-container'>
      {games.length === 0 ? <NoGameMessage /> : <GameCards games={games} />}

      <GamesListButtons />
    </div>
  );
}

export default GamesList;
