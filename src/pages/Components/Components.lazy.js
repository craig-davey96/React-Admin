import React, { lazy, Suspense } from 'react';

const LazyComponents = lazy(() => import('./Components'));

const Components = props => (
  <Suspense fallback={null}>
    <LazyComponents {...props} />
  </Suspense>
);

export default Components;
