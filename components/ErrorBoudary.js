import React, { Component } from "react";

class ErrorBoudary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    return this.state.hasError ? (
      <h1>Ooops, Thats is not good</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoudary;
