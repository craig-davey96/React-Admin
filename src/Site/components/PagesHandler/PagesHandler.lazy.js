import React, { lazy, Suspense } from 'react';

const LazyPagesHandler = lazy(() => import('./PagesHandler'));

const PagesHandler = props => (
  <Suspense fallback={null}>
    <LazyPagesHandler {...props} />
  </Suspense>
);

export default PagesHandler;
