import { Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";

//la nhi~ :<<

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      name: "",
    };
  }

  // increaseNumber = () => {
  //     this.setState({
  //         number: this.state.number + 1,
  //     })
  // }

  // decreaseNumber = () => {
  //     this.setState({
  //         number: this.state.number - 1,
  //     })
  // }

  render() {
    return (
      <div className="bg_header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img
            src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/7AFA0001-EE33-4494-BBB1-051C31715498.svg"
            style={{ width: 123, height: 24, margin: "18px 150px 18px 24px" }}
          />

            <Link to="/" className="font-menu" style={{width: 68,height: 18,margin: "29px 60px 29px 70px"}}>
              PATTEN
            </Link>

            <Link to="/Pricing" className="font-menu" style={{width: 62,height: 18,margin: "29px 60px"}}>
              PRICING
            </Link>

            <Link to="/Support" className="font-menu" style={{width: 71,height: 18,margin: "29px 60px"}}>
              SUPPORT
            </Link>

            <Link to="/Ultrafit_shop" className="font-menu" style={{width: "150px", margin: "29px -200px 29px 60px", height: 18}}>
              ULTRAFIT SHOP
            </Link>

            <button className="edit-piot" >EDIT & PIOT</button>
            <button className="sell-pattern">SELL PATTERN</button>
            <Avatar className="avatar" icon={<UserOutlined />} />
        </nav>
      </div>
    );
  }
}
