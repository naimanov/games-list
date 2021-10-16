import React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../Store/Actions';

interface GameCardButtonsProps {
  name: string;
  index: number;
}

function GameCardButtons({ name, index }: GameCardButtonsProps) {
  const dispatch = useDispatch();
  const deleteGame = () => {
    dispatch({ type: Actions.DELETE_GAME, payload: name });
  };

  const changePosition = (index: number) => {
    dispatch({ type: Actions.OPEN_CHANGE_POSITION_MODAL, payload: index });
  };

  return (
    <div className='button-container'>
      <button
        className='button position-button'
        onClick={() => changePosition(index)}
      >
        Изменить позицию
      </button>
      <button className='button delete-button' onClick={deleteGame}>
        Удалить
      </button>
    </div>
  );
}

export default GameCardButtons;
