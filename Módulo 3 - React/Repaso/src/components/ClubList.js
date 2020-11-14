import React, { Component } from "react";
import Club from "./Club";

class ClubList extends Component {
  render() {
    console.log(this.props.clubs);

    const items = this.props.clubs.map((club, index) => {
      return (
        <li key={index}>
          <Club member={member} />
        </li>
      );
    });
    console.log(this.props.clubs);
    return (
      <div>
        Club List
        <ul>{items}</ul>
      </div>
    );
  }
}

export default ClubList;
