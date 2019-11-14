import React from 'react';
import './App.css';

type TextProps = {
  name: string
}

class Text extends React.Component<TextProps> {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <p>Yeah. Okay.</p>
        <Text name="Tom" />
      </div>
    )
  }
}

export default App;
