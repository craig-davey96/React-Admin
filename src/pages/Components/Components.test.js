import React from 'react';
import ReactDOM from 'react-dom';
import Components from './Components';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Components />, div);
  ReactDOM.unmountComponentAtNode(div);
});