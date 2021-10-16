import React from 'react';
import SortButton from './SortButton';
import { useDispatch } from 'react-redux';
import { Actions } from '../../Store/Actions';
import { useTypedSelector } from '../../Hooks/useTypedSelector';

function Sort() {
  const dispatch = useDispatch();
  const sortType = useTypedSelector((state) => state.gamesReducer.sort_type);

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case 'first-to-last':
        dispatch({ type: Actions.SORT_FIRST_TO_LAST });
        break;
      case 'last-to-first':
        dispatch({ type: Actions.SORT_LAST_TO_FIRST });
        break;
      default:
        break;
    }
  };

  return (
    <div className='sort-container'>
      <span>Сортировать:</span>
      <SortButton
        text={'A - Z'}
        value={'first-to-last'}
        handleRadio={handleRadio}
        sortType={sortType}
      />
      <SortButton
        text={'Z - A'}
        value={'last-to-first'}
        handleRadio={handleRadio}
        sortType={sortType}
      />
    </div>
  );
}

export default Sort;
