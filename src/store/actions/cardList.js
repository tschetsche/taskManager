import { CARD_LIST_ACTION } from '../actionType';

export const replaceCardList = (newCardList) => ({ type: CARD_LIST_ACTION.REPLACE, payload: newCardList });
