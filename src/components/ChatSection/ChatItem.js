import React, { Component } from "react";
import Avatar from "./Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div style={{ animationDelay: `0.8s` }} className={`chat__item ${this.props.user ? this.props.user : ""}`}>
            <div className="chat__item__content">
                <div className="chat__msg">{this.props.msg}</div>
                <div className="chat__meta">
                    <span>13 mins ago</span>
                    <span>Seen 13:19 PM</span>
                </div>
            </div>
            <Avatar isOnline="active" image={this.props.image} />
        </div>
    );
  }
}