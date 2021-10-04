import React, { lazy, Suspense } from 'react';

const LazyEmailField = lazy(() => import('./EmailField'));

const EmailField = props => (
  <Suspense fallback={null}>
    <LazyEmailField {...props} />
  </Suspense>
);

export default EmailField;
