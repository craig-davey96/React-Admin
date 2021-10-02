import React, { lazy, Suspense } from 'react';

const LazyForms = lazy(() => import('./Forms'));

const Forms = props => (
  <Suspense fallback={null}>
    <LazyForms {...props} />
  </Suspense>
);

export default Forms;
