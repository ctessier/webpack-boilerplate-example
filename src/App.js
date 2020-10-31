import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from 'components/Button.js';

class App extends Component {
  state = { toggle: false }

  toggle = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }))
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        <Button onClick={this.toggle}>{toggle ? 'Yeah! Again!' : 'Toggle Me!'}</Button>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
