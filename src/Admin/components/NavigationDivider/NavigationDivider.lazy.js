import React, { lazy, Suspense } from 'react';

const LazyNavigationDivider = lazy(() => import('./NavigationDivider'));

const NavigationDivider = props => (
  <Suspense fallback={null}>
    <LazyNavigationDivider {...props} />
  </Suspense>
);

export default NavigationDivider;
