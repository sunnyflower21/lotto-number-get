import { CREATE_NEW_NUMBER } from "../actions/lottoNumbers";

const defaultState = {
  currentNumber: [],
  history: [],
};

export const lottoNumberReducers = (state = defaultState, action) => {
  if (action.type === CREATE_NEW_NUMBER) {
    const date = new Date();
    return {
      ...state,
      currentNumber: action.numbers,
      history: state.history.concat([
        {
          date: `${date.getFullYear()}.${date.getMonth()}.${date.getDay()} ${date.getMinutes()}:${date.getMinutes()}`,
          numbers: action.numbers,
        },
      ]),
    };
  }
  return {
    ...state,
  };
};
