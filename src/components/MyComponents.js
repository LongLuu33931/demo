import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Long Lưu",
    address: "HCM",
    age: 21,
  };
  handleClick() {
    this.setState({
      name: "Long",
      age: Math.floor(Math.random() * 100 + 1),
    });
    console.log("My name is:", this.state.name);
  }
  handleOnchange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div>My Name is: {this.state.name}</div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnchange(event)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
