import React, { Component } from "react";

export default class middleSection extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "100px",
          marginLeft: "40px",
        }}
      >
        <div id="home" style={{ height: "100vh" }}>
          <h1>This is Home section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="about" style={{ height: "100vh" }}>
          <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contact" style={{ height: "100vh" }}>
          <h1>This is Contact section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="service" style={{ height: "100vh" }}>
          <h1>This is Service section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
      </div>
    );
  }
}
