export function selectBook(book){
  console.log('A book is selected: ', book.title);
  /*selectBook is an ActionCreator, it needs to return an action,
  ** an object with a type property.
  */
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}
