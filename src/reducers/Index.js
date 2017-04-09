import { combineReducers } from 'redux';
import BooksReducer from './ReducerBooks';
import ActiveBookReducer from './ReducerActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook : ActiveBookReducer

});

export default rootReducer;
