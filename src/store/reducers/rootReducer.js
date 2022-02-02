import { CARD_LIST_ACTION } from '../actionType';

const initialState = {
  cardListState: {
    cardList: null,
  },
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_LIST_ACTION.REPLACE: {
      return { ...state, cardListState: { ...state.cardListState, cardList: [...action.payload] } };
    }
    default:
      return { ...state };
  }
};

export default cardListReducer;
