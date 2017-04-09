import { FETCH_WEATHER } from '../actions/Index';

export default function(state=[], action){
  switch (action.type) {
    case FETCH_WEATHER:
      /* Don't mutate the array of state like
      ** return state.push[action.payload.data];
      ** instead return the new instance of array of state intirely
      ** use this: return state.concat([action.payload.data]); or ES6 way
      **/
      return [action.payload.data, ...state];
      break;
  }
  return state;
}
