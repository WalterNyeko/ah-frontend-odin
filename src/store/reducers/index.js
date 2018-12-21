import { combineReducers } from 'redux';
import ui from './ui';
import articles from './article';
import authentication from './authentication';
import forms from './forms';
import filters from './filters';
import bookMarkReducer from './Bookmark';

export default combineReducers({
  ui,
  articles,
  authentication,
  forms,
  filters,
  bookMarkReducer,
});
