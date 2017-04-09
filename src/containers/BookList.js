import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/Index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList(){
    return (
      this.props.books.map(book => {
        return (
          <li
            key={ book.id }
            onClick={()=> this.props.selectBook(book)}
            className="list-group-item">{ book.title }
          </li>
        );
      })
    );
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

//this function is the glue between react and redux
function mapStateToProps(state){
  // whatever is retured will show up as props
  // inside of BookList
  return {
    books: state.books
  }
}

/** Anything returned from this function will end up as props
* on the booklist container
**/
function mapDispatchToProps(dispatch){
  /**
  * Wherever selectBook is called, the result should be passed
  * to all of our reducers
  **/
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch);
}

/** Promote booklist from a component to a container
* It need to know about new disptach method, selectBoo.
* Make it available as a props.
**/
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
