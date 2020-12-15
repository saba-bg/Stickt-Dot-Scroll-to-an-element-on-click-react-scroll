import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <ul className="StickDotBox">
        <div className="StickDotList">
          <li className="StickDotElement">
            <Link
              activeClass="StickDotactive"
              to="home"
              spy={true}
              smooth={true}
            >
              <div style={{ transition: "all ease-in-out 0.2s" }}>
                <div className="StickDot"></div>
              </div>
            </Link>
          </li>
          <svg
            width="100"
            height="80"
            viewPort="0 0 200 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line className="strok" x1="50" y1="3" x2="50" y2="500"></line>
          </svg>
        </div>
        <div className="StickDotList">
          <li className="StickDotElement">
            <Link
              activeClass="StickDotactive"
              to="about"
              spy={true}
              smooth={true}
            >
              <div style={{ transition: "all ease-in-out 0.2s" }}>
                <div className="StickDot"></div>
              </div>
            </Link>
          </li>
          <svg
            width="100"
            height="80"
            viewPort="0 0 200 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line className="strok" x1="50" y1="3" x2="50" y2="500"></line>
          </svg>
        </div>
        <div className="StickDotList">
          <li className="StickDotElement">
            <Link
              activeClass="StickDotactive"
              to="contact"
              spy={true}
              smooth={true}
            >
              <div style={{ transition: "all ease-in-out 0.2s" }}>
                <div className="StickDot"></div>
              </div>
            </Link>
          </li>
          <svg
            width="100"
            height="80"
            viewPort="0 0 200 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line className="strok" x1="50" y1="3" x2="50" y2="500"></line>
          </svg>
        </div>
        <div className="StickDotList">
          <li className="StickDotElement">
            <Link
              activeClass="StickDotactive"
              to="service"
              spy={true}
              smooth={true}
            >
              <div style={{ transition: "all ease-in-out 0.2s" }}>
                <div className="StickDot"></div>
              </div>
            </Link>
          </li>
        </div>
      </ul>
    );
  }
}
