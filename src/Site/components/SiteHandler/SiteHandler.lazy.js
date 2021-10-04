import React, { lazy, Suspense } from 'react';

const LazySiteHandler = lazy(() => import('./SiteHandler'));

const SiteHandler = props => (
  <Suspense fallback={null}>
    <LazySiteHandler {...props} />
  </Suspense>
);

export default SiteHandler;
