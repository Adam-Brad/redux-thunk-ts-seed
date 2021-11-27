import { PayloadAction } from "react-redux-typescript";

const initialState = { berry: null };

export const enum BerryActionTypes {
  SET= 'SET_BERRY'
}

export const berryReducer = (state = initialState, action: PayloadAction<BerryActionTypes, any>) => {
  switch (action.type) {
    case BerryActionTypes.SET:
      return {berry: action.payload};
    default:
      return state;
  }
}
