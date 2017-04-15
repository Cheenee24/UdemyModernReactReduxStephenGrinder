import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; // No need for this for shortcut
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`post/${post.id}`}>
            <span className="pull-xs-right">{ post.categories } </span>
            <strong>{post.title}</strong>
          </Link>
        </li>

      );
    });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );

  }
};

/* short cut for boiler plate mapDispatchToProps,
** you don't need to call this and the bindActionCreators anymore
** just directly call the action in second parameter of connect
** example: { fetchPosts: fetchPosts } or just { fetchPosts }
*/
// function mapDispatchToProps(dispatch){
//   bindActionCreators({ fetchPosts }, dispatch);
// }

function mapStateToProps(state){
  return {
    posts: state.post.all
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
