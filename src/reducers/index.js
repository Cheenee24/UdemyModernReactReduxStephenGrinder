import { combineReducers } from 'redux';
import PostReducer from './ReducerPost';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  post: PostReducer,
  form: formReducer
});

export default rootReducer;
