import React, { Component } from "react";
import "./style.css";
import hinhanh from "./hinhanh.png";
import "antd/dist/antd.min.css";
import { Rate, Card, Button, Dropdown, Menu, Avatar, Image } from "antd";

const { Meta } = Card;

const menu = (

  <Menu
    items={[
      {
        key: "1",
        label: (
          <a target="_blank" rel="noopener noreferrer">
            CANADA & USA
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a target="_blank" rel="noopener noreferrer">
            EUROPE
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a target="_blank" rel="noopener noreferrer">
            SOUTH KOREA
          </a>
        ),
      },
    ]}
  />
);

export default class Pattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }


  render() {
    const styleMenuBottomText = {fontSize:"14px",color:"#bababa",fontWeight:"600"}



    return (
      <>
        <div className="Main-page">
          <div
            className="img_main_banner "
            style={{
              backgroundImage: `url("https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/E8DBA9AD-FCC7-4864-AE9C-45294840049D.png")`,
            }}
          >
            <div style={{ marginTop: -30, marginBottom: 50 }}>
              <div className="Cutting-File">
                Find Your Paint Protection Film Cutting File.
              </div>
            </div>

            <div className="bg_filter">
              <div className="menu-con">
                {/*TOP*/}
                <div className="items">
                  <div className="item">
                    Location <br />{" "}
                    <div style={styleMenuBottomText} className="bot" >Select Location</div>
                    <div className="drop-down">
                      <div className="content">CANADA & USA</div>
                      <div className="content">EUROPE</div>
                      <div className="content">SOUTH KOREA</div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "2px",
                      height: "47px",
                      background: "#ededed",
                    }}
                  />

                  <div className="item">
                    Year <br />{" "}
                    <div style={styleMenuBottomText} className="bot">Select Year</div>
                    <div className="drop-down" >
                      <div className="content">2022</div>
                      <div className="content">2021</div>
                      <div className="content">2020</div>
                      <div className="content">2019</div>
                      <div className="content">2018</div>
                      <div className="content">2017</div>
                      <div className="content">2016</div>
                      <div className="content">2015</div>
                      <div className="content">2014</div>
                      <div className="content">2013</div>
                      <div className="content">2012</div>
                      <div className="content">2011</div>
                      <div className="content">2010</div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "47px",
                      background: "#ededed",
                    }}
                  />
                  <div className="item">
                    Make <br />{" "}
                    <div style={styleMenuBottomText}>Select Make</div>{" "}
                  </div>

                  <div
                    style={{
                      width: "2px",
                      height: "47px",
                      background: "#ededed",
                    }}
                  />
                  <div className="item">
                    Model <br />{" "}
                    <div style={styleMenuBottomText}>Select Model</div>{" "}
                  </div>

                  <div
                    style={{
                      width: "2px",
                      height: "47px",
                      background: "#ededed",
                    }}
                  />
                  <div className="item">
                    Sub-Model <br />{" "}
                    <div style={styleMenuBottomText}>Select Sub-Model</div>{" "}
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "47px",
                      background: "#ededed",
                    }}
                  />
                  <div className="item">
                    Series <br />{" "}
                    <div style={styleMenuBottomText}>Select Series</div>{" "}
                  </div>
                </div>
                {/*DOWN*/}
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    marginTop: 10,
                    width: 120,
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  <div style={{ fontSize: 10 }}>RESET</div>
                  <div
                    style={{
                      borderRadius: 17.5,
                      width: 70,
                      textAlign: "center",
                      background: "#0046a6",
                      color: "white",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    SEARCH
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="NEW-PROTECTION-FILM-LIST">
              NEW PROTECTION FILM LIST
            </div>

            <div style={{ display: "flex", marginBottom: -30,margin:"0 auto"}}>
              <div
                className="card-con"
                style={{ margin: "60px 30px 30px 360px" }}
              >
                <div className="tri"></div>
                <div className="cir"></div>
                <div className="spon">SPONSORED</div>
                <div style={{ margin: "25px 0px 0px 90px" }}>
                  <span style={{ fontSize: 12 }}>
                    {" "}
                    Upload date: 2021.12.01{" "}
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                  </span>
                </div>

                <div>
                  <img src={hinhanh} className="img" />
                </div>

                <div>
                  <p className="CANADA-USA-2021-TOYOTA-CAMRY-XLE-HYBRID ">
                    CANADA & USA > 2021 > TOYOTA > CAMRY>XLEHYBRID
                  </p>
                  <p className="OUT-FRONT-BUMPER">OUT FRONT > BUMPER</p>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, margin: "-5px 0px 0px 17px" }}>
                    <Rate defaultValue={4} />
                  </div>
                  <div style={{ width: "50%" }}>
                    <p className="Credit"> 20 Creadit</p>
                    <p className="downloads"> 60 download</p>
                  </div>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex", marginTop: -4, marginLeft: 15 }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <Avatar
                        className="img_profile"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/CD46B98E-EF5A-4D37-A9CC-1023F6C0CDEA.png"
                      />
                    </span>
                    <span className="By-carlover"> By Carlover</span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <span>
                      <img
                        className="icon_beginner"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/5E5CBF29-7507-4559-B058-C52B4C2E79BE.svg"
                      />
                    </span>
                    <span class="Beginner">Beginner</span>
                  </div>
                </div>
              </div>

              <div className="card-con" style={{ margin: "60px 30px 30px" }}>
                <div style={{ margin: "25px 0px 0px 90px" }}>
                  <span style={{ fontSize: 12 }}>
                    {" "}
                    Upload date: 2021.12.01{" "}
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                  </span>
                </div>

                <div>
                  <img src={hinhanh} className="img" />
                </div>

                <div>
                  <p className="CANADA-USA-2021-TOYOTA-CAMRY-XLE-HYBRID ">
                    CANADA & USA > 2020 > GENESIS > G70>ELITE
                  </p>
                  <p className="OUT-FRONT-BUMPER">OUT FRONT > BUMPER</p>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, margin: "-5px 0px 0px 17px" }}>
                    <Rate defaultValue={4} />
                  </div>
                  <div style={{ width: "50%" }}>
                    <p className="Credit"> 18 Creadit</p>
                    <p className="downloads"> 11 download</p>
                  </div>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex", marginTop: -4, marginLeft: 15 }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <Avatar
                        className="img_profile"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/2293FAB8-281A-45E7-9B2B-BCBEB51DF440.png"
                      />
                    </span>
                    <span className="By-carlover"> By Carve</span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <span>
                      <img
                        className="icon_beginner"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/666310C4-0893-4FB9-91EF-26E1F5A4AC07.svg"
                      />
                    </span>
                    <span class="Beginner">Expert</span>
                  </div>
                </div>
              </div>

              <div className="card-con" style={{ margin: "60px 30px 30px" }}>
                <div style={{ margin: "25px 0px 0px 90px" }}>
                  <span style={{ fontSize: 12 }}>
                    {" "}
                    Upload date: 2021.12.01{" "}
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                  </span>
                </div>

                <div>
                  <img src={hinhanh} className="img" />
                </div>

                <div>
                  <p className="CANADA-USA-2021-TOYOTA-CAMRY-XLE-HYBRID ">
                    CANADA & USA > 2020 > CADILLAC > CT5>PREMIUM LUXURY
                  </p>
                  <p className="OUT-FRONT-BUMPER">OUT FRONT > BUMPER</p>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, margin: "-5px 0px 0px 17px" }}>
                    <Rate defaultValue={4} />
                  </div>
                  <div style={{ width: "50%" }}>
                    <p className="Credit"> 18 Creadit</p>
                    <p className="downloads"> 11 download</p>
                  </div>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex", marginTop: -4, marginLeft: 15 }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <Avatar
                        className="img_profile"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/50ED8CF8-E039-43CA-BD8E-3DB2B7D7F2B9.png"
                      />
                    </span>
                    <span className="By-carlover"> By Fimlking</span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <span>
                      <img
                        className="icon_beginner"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/C613C5E3-FC87-4443-8469-63678E8AD208.svg"
                      />
                    </span>
                    <span class="Beginner">Master</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                className="card-con"
                style={{ margin: "60px 30px 30px 360px" }}
              >
                <div style={{ margin: "25px 0px 0px 90px" }}>
                  <span style={{ fontSize: 12 }}>
                    {" "}
                    Upload date: 2021.12.01{" "}
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                  </span>
                </div>

                <div>
                  <img src={hinhanh} className="img" />
                </div>

                <div>
                  <p className="CANADA-USA-2021-TOYOTA-CAMRY-XLE-HYBRID ">
                    CANADA & USA > 2020 > GENESIS > G70>ELITE
                  </p>
                  <p className="OUT-FRONT-BUMPER">OUT FRONT > BUMPER</p>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, margin: "-5px 0px 0px 17px" }}>
                    <Rate defaultValue={4} />
                  </div>
                  <div style={{ width: "50%" }}>
                    <p className="Credit"> 18 Creadit</p>
                    <p className="downloads"> 11 download</p>
                  </div>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex", marginTop: -4, marginLeft: 15 }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <Avatar
                        className="img_profile"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/0C8C5A52-F01E-42A9-B79E-72D4B20EE182.png"
                      />
                    </span>
                    <span className="By-carlover"> By Benzz</span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <span>
                      <img
                        className="icon_beginner"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/666310C4-0893-4FB9-91EF-26E1F5A4AC07.svg"
                      />
                    </span>
                    <span class="Beginner">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="card-con" style={{ margin: "60px 30px 30px" }}>
                <div style={{ margin: "25px 0px 0px 90px" }}>
                  <span style={{ fontSize: 12 }}>
                    {" "}
                    Upload date: 2021.12.01{" "}
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                  </span>
                </div>

                <div>
                  <img src={hinhanh} className="img" />
                </div>

                <div>
                  <p className="CANADA-USA-2021-TOYOTA-CAMRY-XLE-HYBRID ">
                    CANADA & USA > 2020 > CADILLAC > CT5>PREMIUM LUXURY
                  </p>
                  <p className="OUT-FRONT-BUMPER">OUT FRONT > BUMPER</p>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, margin: "-5px 0px 0px 17px" }}>
                    <Rate defaultValue={4} />
                  </div>
                  <div style={{ width: "50%" }}>
                    <p className="Credit"> 45 Creadit</p>
                    <p className="downloads"> 97 download</p>
                  </div>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex", marginTop: -4, marginLeft: 15 }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <Avatar
                        className="img_profile"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/8E13145B-FA73-4303-BF18-66C741607EB7.png"
                      />
                    </span>
                    <span className="By-carlover"> By Bmwing</span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <span>
                      <img
                        className="icon_beginner"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/C613C5E3-FC87-4443-8469-63678E8AD208.svg"
                      />
                    </span>
                    <span class="Beginner">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="card-con" style={{ margin: "60px 30px 30px" }}>
                <div className="tri"></div>
                <div className="cir"></div>
                <div className="spon">SPONSORED</div>
                <div style={{ margin: "25px 0px 0px 90px" }}>
                  <span style={{ fontSize: 12 }}>
                    {" "}
                    Upload date: 2021.12.01{" "}
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                  </span>
                </div>

                <div>
                  <img src={hinhanh} className="img" />
                </div>

                <div>
                  <p className="CANADA-USA-2021-TOYOTA-CAMRY-XLE-HYBRID ">
                    CANADA & USA > 2021 > TOYOTA > CAMRY>XLEHYBRID
                  </p>
                  <p className="OUT-FRONT-BUMPER">OUT FRONT > BUMPER</p>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1, margin: "-5px 0px 0px 17px" }}>
                    <Rate defaultValue={4} />
                  </div>
                  <div style={{ width: "50%" }}>
                    <p className="Credit"> 50 Creadit</p>
                    <p className="downloads"> 210 download</p>
                  </div>
                </div>

                <hr style={{ width: "100%" }} />

                <div style={{ display: "flex", marginTop: -4, marginLeft: 15 }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <Avatar
                        className="img_profile"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/3FB3ABB1-603B-4A33-8100-A9C0C1FAB344.png"
                      />
                    </span>
                    <span className="By-carlover"> By Youue</span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <span>
                      <img
                        className="icon_beginner"
                        src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/5E5CBF29-7507-4559-B058-C52B4C2E79BE.svg"
                      />
                    </span>
                    <span class="Beginner">Beginner</span>
                  </div>
                </div>
              </div>

            </div>
            <button className="LOAD-MORE">LOAD MORE</button>

          </div>
          {/*<div style={{margin:"0 auto"}}>*/}

          {/*</div>*/}

          <img
            src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/7F2FF20C-1DC9-4B8D-8444-C8C2054795A0.png"
            className="banner"
          />

          <div style={{ display: "flex" }}>
            <img
              className="img_left"
              src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/F263C576-E1C1-413E-B8F7-49386FE66961.png"
            />
            <div
              className="img_right "
              style={{
                backgroundImage: `url("https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/061378C1-5AD1-4ABE-817A-30B1D304EFE8.svg")`,
              }}
            >
              <div style={{ padding: "303px 360px 234px 150px" }}>
                <span className="span_right">
                  The largest/first pattern marketplace for <br />
                  automotive film professionals in the world.
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ margin: "200px 160px 30px 150px", width: 960 }}>
              <div className="span_left">
                Search for thousands of automotive patterns, <br />
                customize to fit your needs, and plot online <br />
                any film regardless of brand!

                <p className="p">
                  Donec vitae porta sapien, nec dictum sapien. Vivamus interdum{" "}
                  <br />
                  dolor a ullamcorper congue. Curabitur non eleifend enim.
                </p>
              </div>

            </div>
            <img
              src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/6EAA2EAE-DEB8-4BF9-BF67-995F4137D809.png"
              className="img_right"
            />
          </div>

          <div style={{ marginTop: 18, display: "flex" }}>
            <img
              className="img_left"
              src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/61CD0F80-141A-4066-BDFC-1CD04D92E20E.png"
            />
            <div
              className="img_right "
              style={{
                backgroundImage: `url("https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/061378C1-5AD1-4ABE-817A-30B1D304EFE8.svg")`,
              }}
            >
              <div style={{ padding: "170px 97px 234px 181px" }}>
                <div className="span_right" style={{ marginLeft: -90 }}>
                  Easily upload your own patterns and start <br /> making money
                  now!
                  <p className="p_right">
                    Donec vitae porta sapien, nec dictum sapien. Vivamus interdum{" "}
                    <br />
                    dolor a ullamcorper congue. Curabitur non eleifend enim.
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div
            className="img_banner"
            style={{
              backgroundImage: `url("https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/2EE5E46C-0F0C-476C-AFD7-351DBEA6599D.png")`,
            }}
          >
            <div className="CREDIT-PACKS">CREDIT PACKS</div>
            <p className="p-Choose">
              Choose credit plan designed to meet your needs.
            </p>

            <div style={{ display: "flex", marginTop: -25 }}>
              <div className="bg">
                <span className="STANDARD">STANDARD</span>
                <hr className="hr" />
                <span className="span50"> $50</span>
                <p className="VAT">*VAT not included in prices.</p>
                <hr className="hr" />
                <p className="_Credit">50 Credit</p>
                <p className="Total-Credit">Total Credit</p>
                <p className="-Credit">50 credit</p>
              </div>

              <div className="bg">
                <span className="STANDARD">STANDARD</span>
                <hr className="hr" />
                <span className="span50"> $100</span>
                <p className="VAT">*VAT not included in prices.</p>
                <hr className="hr" />
                <p className="_Credit">100 Credit + 5 Credit</p>
                <p className="Total-Credit">Total Credit</p>
                <p className="-Credit">105 credit</p>
              </div>

              <div className="bg">
                <span className="STANDARD">STANDARD</span>
                <hr className="hr" />
                <span className="span50"> $250</span>
                <p className="VAT">*VAT not included in prices.</p>
                <hr className="hr" />
                <p className="_Credit">250 Credit + 20 Credit</p>
                <p className="Total-Credit">Total Credit</p>
                <p className="-Credit">270 credit</p>
              </div>

              <div className="bg">
                <span className="STANDARD">STANDARD</span>
                <hr className="hr" />
                <span className="span50"> $1000</span>
                <p className="VAT">*VAT not included in prices.</p>
                <hr className="hr" />
                <p className="_Credit">1000 Credit + 130 Credit</p>
                <p className="Total-Credit">Total Credit</p>
                <p className="-Credit">1300 credit</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            fontFamily: "Roboto",
            marginTop: -275,
            backgroundColor: "#fbfbfb",
            height: 137,
            border: "1px solid #ededed ",
            width: 1920,
          }}
        >
          <div style={{ margin: "18px 213px 18px -5px" }}>
            <img
              src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/assets/7AFA0001-EE33-4494-BBB1-051C31715498.svg"
              style={{ width: 123, height: 24}}
            />
            <span className="About-us">About Us</span>
            <span className="About-us">Our Product</span>
            <span className="About-us">Contact Us</span>
            <span className="About-us">Shop</span>
          </div>
          <hr style={{ width: "100%", color: "#ededed", height: 2 }} />
          <span className="-INOGROW-All">
            ©2021 INOGROW. All Rights Reserved.
          </span>
        </div>
      </>
    );
  }
}
