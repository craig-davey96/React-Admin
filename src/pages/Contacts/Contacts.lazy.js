import React, { lazy, Suspense } from 'react';

const LazyContacts = lazy(() => import('./Contacts'));

const Contacts = props => (
  <Suspense fallback={null}>
    <LazyContacts {...props} />
  </Suspense>
);

export default Contacts;
