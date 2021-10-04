import React, { lazy, Suspense } from 'react';

const LazyChatWindow = lazy(() => import('./ChatWindow'));

const ChatWindow = props => (
  <Suspense fallback={null}>
    <LazyChatWindow {...props} />
  </Suspense>
);

export default ChatWindow;
