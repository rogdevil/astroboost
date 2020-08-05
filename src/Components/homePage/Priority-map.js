import React from "react";

export default function Priority(props) {
  return (
    <div className="priority animatorFade show-on-scroll">
      <p className="red">{props.number}</p>
      <div className="priority-content">
        <p className="priority-content-heading red">{props.heading}</p>
        <p className="priority-content-description white">
          {props.description}
        </p>
      </div>
    </div>
  );
}
