import { Actions } from '../Store/Actions';

interface GamesState {
  games: any[];
  sort_type: string;
  modal_type: string;
  changing_position: number;
}

interface GamesAction {
  type: string;
  payload?: any;
}
const initialState: GamesState = {
  games: [],
  sort_type: 'none',
  modal_type: 'none',
  changing_position: 0,
};

export const gamesReducer = (
  state = initialState,
  action: GamesAction
): GamesState => {
  switch (action.type) {
    case Actions.GET_DOWNLOAD_GAME_LIST:
      return {
        ...state,
        games: [...action.payload],
      };
    case Actions.SORT_FIRST_TO_LAST:
      return {
        ...state,
        games: [
          ...state.games.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          ),
        ],
        sort_type: 'first-to-last',
      };
    case Actions.SORT_LAST_TO_FIRST:
      return {
        ...state,
        games: [
          ...state.games.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
          ),
        ],
        sort_type: 'last-to-first',
      };
    case Actions.DELETE_GAME:
      return {
        ...state,
        games: [
          ...state.games.filter((item) => {
            return item.name !== action.payload;
          }),
        ],
      };
    case Actions.OPEN_ADD_MODAL:
      return {
        ...state,
        modal_type: 'add',
      };
    case Actions.OPEN_CHANGE_POSITION_MODAL:
      return {
        ...state,
        modal_type: 'change-position',
        changing_position: action.payload,
      };

    case Actions.CLOSE_MODAL:
      return {
        ...state,
        modal_type: 'none',
      };

    case Actions.ADD_GAME:
      const newArr = state.games;
      newArr.push({
        name: action.payload.name,
        icon_url: action.payload.icon_url,
      });
      return {
        ...state,
        games: [...newArr],
        modal_type: 'none',
      };

    case Actions.CHANGE_GAME_POSITION:
      const changingArr = state.games;
      const changingGame = changingArr.splice(state.changing_position, 1);
      changingArr.splice(action.payload - 1, 0, changingGame[0]);
      return {
        ...state,
        games: [...changingArr],
        modal_type: 'none',
        changing_position: 0,
      };
    default:
      return state;
  }
};
