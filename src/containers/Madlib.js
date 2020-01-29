import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';
import Header from '../components/Header.js';

export default class Madlib extends Component{
  state = {
    showResult: false
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        <Header />
        {!showResult && <Form onSubmit={this.handleSubmit} />}
        {showResult && <Result words={[]} closeResult={this.toggleResult} />}
      </>
    );
  }
}
