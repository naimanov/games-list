import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import { Actions } from '../../Store/Actions';

function ModalChangePosition() {
  const dispatch = useDispatch();
  const games = useTypedSelector((state) => state.gamesReducer.games);

  const [gamePosition, setGamePosition] = useState('');
  const [gamePositionError, setGamePositionError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleGamePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGamePosition(e.target.value);
  };

  const changePosition = () => {
    if (+gamePosition > games.length || +gamePosition <= 0) {
      setGamePositionError(true);
    } else {
      setGamePositionError(false);
      dispatch({
        type: Actions.CHANGE_GAME_POSITION,
        payload: gamePosition,
      });
    }
  };

  const closeModal = () => {
    dispatch({ type: Actions.CLOSE_MODAL });
  };

  return (
    <section className='modal-container'>
      <form className='modal-form' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='form-title'>Изменить позицию игры</h2>
        <p className='form-text'>
          Введите новый номер позиции игры в списке (от 1 до {games.length}):
        </p>
        {gamePositionError && (
          <p className='form-error-text'>
            Введен некорректный номер позиции игры
          </p>
        )}
        <input
          type='number'
          value={gamePosition}
          onChange={(e) => handleGamePosition(e)}
        />
        <div className='form-button-container'>
          <button className='button' onClick={changePosition}>
            OK
          </button>
          <button className='button' onClick={closeModal}>
            Отмена
          </button>
        </div>
      </form>
    </section>
  );
}

export default ModalChangePosition;
