import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions';


class PostShow extends Component {
  /* Note: Avoid using context in general,
  ** You can only use this for router
  */
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);

  }

  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
    .then(() => {
      /* blog post has been deleted, navigate the user to the Index
      ** We navigate by calling this.context.router.push with the
      ** new path to navigate to.
      */
      this.context.router.push('/');
    });
  }

  render(){
    const {post} = this.props;

    if(!post){
      return (<div>Loading</div>);
    }

    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right">Delete Post</button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>

    )
  }
}

function mapStateToProps(state){
  return { post:state.post.post}

}

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostShow);
