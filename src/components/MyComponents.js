import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <DisplayInfo name="Long Luu" age="21" />
      </div>
    );
  }
}

export default MyComponent;
