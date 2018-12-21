import types from 'store/types/articles';

const initialstate = {
  result: false,
  count: 0,
};

const bookMarkReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.ADD_BOOKMARK:
      return { ...state, result: action.payload.result, count: action.payload.count };
    default:
      return state;
  }
};
export default bookMarkReducer;
