import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { toggle: false }

  toggle = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }))
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        {this.state.toggle && <p>Hey There!</p>}
        <button onClick={this.toggle}>Toggle Me!</button>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
