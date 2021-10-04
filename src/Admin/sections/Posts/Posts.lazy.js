import React, { lazy, Suspense } from 'react';

const LazyPosts = lazy(() => import('./Posts'));

const Posts = props => (
  <Suspense fallback={null}>
    <LazyPosts {...props} />
  </Suspense>
);

export default Posts;
