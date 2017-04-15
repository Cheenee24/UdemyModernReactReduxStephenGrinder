import React, { Component, PropTypes } from 'react';
// import { bindActionCreators } from 'redux'; // No need for this for shortcut
import { createPost } from '../actions';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

class PostNew extends Component {
  /* Note: Avoid using context in general,
  ** You can only use this for router
  */
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){
    // the props here is from the redux form not from the component
    this.props.createPost(props)
    .then(() => {
      /* blog post has been created, navigate the user to the Index
      ** We navigate by calling this.context.router.push with the
      ** new path to navigate to.
      */
      this.context.router.push('/');
    });

  }

  render(){
    const { fields: { title, categories,content },
    handleSubmit } = this.props;


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create Form</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            { categories.touched ? categories.error : '' }
          </div>

        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">
            { content.touched ? content.error : '' }
          </div>

        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(val){
  const errors ={};

  if(!val.title){
    errors.title = 'Enter a Title';
  }
  if(!val.categories){
    errors.categories = 'Enter a Categories';
  }
  if(!val.content){
    errors.content = 'Enter a Content';
  }
  return errors;
}

/* Note: I use downgraded redux-form ver 6 to ver 4
** because I encountered error on the ver 6
** Note: Connect: 1st arg is mapStateToProps, 2nd is mapDispatchToProps
** Note: reduxForm: 1st arg is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
*/
export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
},null,{ createPost })(PostNew);
