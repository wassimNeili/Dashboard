import React, { Component } from 'react';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Oops! Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
