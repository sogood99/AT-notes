import React, { Component } from "react";

export default class Latex extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
  componentDidMount() {
    this.renderMath();
  }
  componentDidUpdate() {
    this.renderMath();
  }
  renderMath() {
    if (window.MathJax.typeset) {
      window.MathJax.typeset();
    }
  }
}
