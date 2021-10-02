import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Contacts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contacts />, div);
  ReactDOM.unmountComponentAtNode(div);
});