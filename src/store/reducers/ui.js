import uiTypes from 'store/types/ui';

const initialState = { loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.ACTIVATE_LOADING:
      return { loading: true };
    case uiTypes.DEACTIVATE_LOADING:
      return { loading: false };
    default:
      return state;
  }
};
