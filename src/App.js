import React from "react";

class Square extends React.Component {
  constructor(props){
    super(props)
    this.state={
      color: this.props.color,
    };
  }
  handleClick = () => {
    const newColor = this.state.color === "red" ? "blue" : "red";
    this.setState({ color: newColor });
  };
  render(){
    return(
      <button className='square' style={{ backgroundColor: this.state.color }}
      onClick={this.handleClick}>
      </button>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
        <Square color="red" />
        <Square color="blue" />
      </div>
    )
  }
}

export default App;