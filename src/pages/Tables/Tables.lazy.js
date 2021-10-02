import React, { lazy, Suspense } from 'react';

const LazyTables = lazy(() => import('./Tables'));

const Tables = props => (
  <Suspense fallback={null}>
    <LazyTables {...props} />
  </Suspense>
);

export default Tables;
