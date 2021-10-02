import React, { lazy, Suspense } from 'react';

const LazyNavigation/DropdownNavItem = lazy(() => import('./Navigation/DropdownNavItem'));

const Navigation/DropdownNavItem = props => (
  <Suspense fallback={null}>
    <LazyNavigation/DropdownNavItem {...props} />
  </Suspense>
);

export default Navigation/DropdownNavItem;
