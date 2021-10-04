import React, { lazy, Suspense } from 'react';

const LazyTopNavigation = lazy(() => import('./TopNavigation'));

const TopNavigation = props => (
  <Suspense fallback={null}>
    <LazyTopNavigation {...props} />
  </Suspense>
);

export default TopNavigation;
