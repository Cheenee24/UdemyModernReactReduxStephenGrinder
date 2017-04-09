/** State argument is not application state, only the state
** this reducer is responsible for.
*/
export default function(state = null, action){
  // State can't be undefined so we need to set dafault to null
  switch (action.type) {
    case 'BOOK_SELECTED':
      // Don't mutate a current state, it should 100% fresh object
      // Don't do this: state.title = book.title;
      return action.payload;
      break;
  }

  return state;
}
