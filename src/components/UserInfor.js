import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Long Lưu",
    address: "HCM",
    age: 21,
  };
  handleOnchange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnchangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div>
          My Name is: {this.state.name} & my age is: {this.state.age}
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnchange(event)}
          />
          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnchangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
