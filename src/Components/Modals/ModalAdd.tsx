import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../Store/Actions';

function Modal() {
  const dispatch = useDispatch();
  const [gameName, setGameName] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [gameNameError, setGameNameError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleGameName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(e.target.value);
  };

  const handleIconUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIconUrl(e.target.value);
  };

  const addGame = () => {
    if (gameName === '') {
      setGameNameError(true);
    } else {
      setGameNameError(false);
      dispatch({
        type: Actions.ADD_GAME,
        payload: { name: gameName, icon_url: iconUrl },
      });
    }
  };

  const closeModal = () => {
    dispatch({ type: Actions.CLOSE_MODAL });
  };

  return (
    <section className='modal-container'>
      <form className='modal-form' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='form-title'>Добавить игру</h2>
        <p className='form-text'>Введите название игры:</p>
        {gameNameError && (
          <p className='form-error-text'>Данное поле не должно быть пустым</p>
        )}
        <input
          type='text'
          value={gameName}
          onChange={(e) => handleGameName(e)}
        />
        <p className='form-text'>Введите URL-адрес иконки игры:</p>
        <input type='text' value={iconUrl} onChange={(e) => handleIconUrl(e)} />
        <div className='form-button-container'>
          <button className='button' onClick={addGame}>
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

export default Modal;
