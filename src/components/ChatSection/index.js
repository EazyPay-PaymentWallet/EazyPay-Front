import React, { Component, useState, createRef, useEffect } from "react";
import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';

import "./ChatElements.css";
import img1 from '../../Images/user.png'
import img2 from '../../Images/15.png'
import ChatItem from "./ChatItem";

const Title = styled.h2`
  padding-bottom: 10px;
  margin: 15px 0;
  font-size: 40px;
  border-bottom: 3px solid gray;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  padding: 0px 20px;
  overflow: hidden;
`;

const Icon = styled(LinkR)`
  margin: 20px;
  color: white;
  text-decoration: underline white;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;

  &:hover{
      color: white;
  }
`;

const Left = styled.div`
  width: 20%;
`;

const Right = styled.div`
  width: 80%;
`;

const Image = styled.img`
  width: 155%;
  margin-left: -137px;
  margin-top: 102px;
`;

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image: img1,
      type: "other",
      msg: "How can we help you?",
    },
    {
      key: 2,
      image: img1,
      type: "",
      msg: "Payment failed but amount has been taken",
    },
    {
      key: 3,
      image: img1,
      type: "",
      msg: "Please check on it",
    },
    {
      key: 4,
      image: img1,
      type: "other",
      msg: "Don't worry, we'll check on it and get your money back"
    },
    {
      key: 5,
      image: img1,
      type: "",
      msg: "Thank you",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:"https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <Container>
        <Icon to="/">EazyPay</Icon>
        <Left>
          <Image src={img2} />
        </Left>
        <Right>
          <div className="main__chatcontent">
            <Title>Customer Support</Title>
            <div className="content__body">
              <div className="chat__items">
                {this.state.chat.map((itm, index) => {
                  return (
                    <ChatItem
                      animationDelay={index + 2}
                      key={itm.key}
                      user={itm.type ? itm.type : "me"}
                      msg={itm.msg}
                      image={itm.image}
                    />
                  );
                })}
                <div ref={this.messagesEndRef} />
              </div>
            </div>
            <div className="content__footer">
              <div className="sendNewMessage">
                <input
                  type="text"
                  placeholder="Type a message here"
                  onChange={this.onStateChange}
                  value={this.state.msg}
                />
              </div>
            </div>
          </div>      
        </Right>
      </Container>
    );
  }
}