import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Long Lưu",
    address: "HCM",
    age: 21,
  };
  handleClick() {
    console.log("hehe");
  }
  render() {
    return (
      <div>
        <div>My Name is: {this.state.name}</div>
        <div>My Address is: {this.state.address}</div>
        <div>My Age is: {this.state.age}</div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default MyComponent;
