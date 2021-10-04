import React, { lazy, Suspense } from 'react';

const LazyChatUsers = lazy(() => import('./ChatUsers'));

const ChatUsers = props => (
  <Suspense fallback={null}>
    <LazyChatUsers {...props} />
  </Suspense>
);

export default ChatUsers;
