import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import { Actions } from '../../Store/Actions';

function ModalOverlay() {
  const dispatch = useDispatch();
  const modalOpen = useTypedSelector((state) => state.gamesReducer.modal_type);

  const closeModal = () => {
    dispatch({ type: Actions.CLOSE_MODAL });
  };

  return (
    <div
      className={`${modalOpen !== 'none' ? 'overlay overlay-open' : 'overlay'}`}
      onClick={() => closeModal()}
    ></div>
  );
}

export default ModalOverlay;
