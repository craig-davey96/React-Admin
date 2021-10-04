import React, { lazy, Suspense } from 'react';

const LazyDropdownNavItem = lazy(() => import('./DropdownNavItem'));

const DropdownNavItem = props => (
  <Suspense fallback={null}>
    <LazyDropdownNavItem {...props} />
  </Suspense>
);

export default DropdownNavItem;
