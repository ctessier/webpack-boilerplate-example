import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from 'components/Button.jsx';

class App extends Component {
  state = { toggle: false, hello: 'world!' }

  toggle = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  }

  render() {
    const { toggle, ...rest } = this.state;

    return (
      <>
        <h1>
          Hello,
          {rest.hello}
        </h1>
        <pre>{JSON.stringify(rest)}</pre>
        <Button onClick={this.toggle}>{toggle ? 'Yeah! Again!' : 'Toggle Me!'}</Button>
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
