import BASE_URL from "../constants/urls";
import {BerryActionTypes} from "../reducers/berryReducer";

const theThunk = (dispatch: any, getState: any) => {
  const state = getState();

  fetch(`${BASE_URL}` + `${state.counter.count}`).then(
    response => response.json().then(
      data => {
        dispatch({type: BerryActionTypes.SET, payload: data})
        dispatch({type: 'INCREMENT'})
      }
    )
  )
};

export default theThunk;
