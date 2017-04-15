import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostIndex from './components/PostIndex';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="post/new" component={PostNew}/>
    <Route path="post/:id" component={PostShow}/>
  </Route>
)
