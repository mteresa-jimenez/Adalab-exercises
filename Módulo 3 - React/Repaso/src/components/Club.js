import React from "react";

const Club = (props) => {
  const items = this.props.members.map((member, index) => {
      
  
  return (
    <article>
      <h2>{props.club.name}</h2>
      <i className={props.club.fa}></i>
      <h3>Members:</h3>
      <ul>
        <li>{items}</li>
      </ul>
    </article>
  );
}

export default Club;
