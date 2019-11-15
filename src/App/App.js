import React from 'react';
import './App.css';

type TextProps = {
  name: string
}

type State = {
  count: number
}

class Text extends React.Component<TextProps, State> {

  state = {
    count: 0
  }

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    
   
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <p>Hey {this.props.name}</p>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>
            Increment
          </button>
        </div>
      </React.Fragment>
    )
  }
}

class CustomTextInput extends React.Component<{}>{
  
  handleSubmit = e => {
    alert("need me?");
    e.preventDefault();
    console.log(this.textInput);
  };

  textInput: ?HTMLInputElement

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" ref={textInput => (this.textInput = textInput)} />
            <button>Submit</button>
          </form>
      </div>
    )
  }
}

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <CustomTextInput />
        <Text name="Tom" />
      </div>
    )
  }
}

export default App;
