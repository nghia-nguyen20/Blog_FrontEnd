import React, { Component } from "react";
import "./style.css"
import { Input, message, Modal, Form, Upload, DatePicker, Col, Row, Card, Button, Space } from "antd";


export default class Pattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <>
        <div className = "img_main_banner " style={{ 

            backgroundImage: `url("https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/E8DBA9AD-FCC7-4864-AE9C-45294840049D.png")` }}>
              
            <span className="Find-Your-Paint-Protection-Film-Cutting-File">
                Find Your Paint Protection Film Cutting File.
            </span>
        </div>
      </>
    );
  }
}