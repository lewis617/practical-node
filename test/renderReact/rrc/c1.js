import React, { Component } from 'react';
import { render } from 'react-dom';
import './c1.html';

class C1 extends Component {
  state = {}
  render() {
    const { ...rest } = { a: 1 };
    return (
      <div>
        This is c1
      </div>
    );
  }
}

render(<C1 />, document.querySelector('#app'));

