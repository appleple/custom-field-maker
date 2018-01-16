import React, { Component } from 'react';
import classnames from 'classnames';

export default class Notify extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentWillReceiveProps(props) {
    const { onFinish } = this.props;
    if (props.show === true) {
      setTimeout(() => {
        this.setState({
          active: true
        })
      },1);
      setTimeout(() => {
        this.setState({
          active: false
        });
      }, 800);
      setTimeout(() => {
        if (onFinish) {
          onFinish();
        }
      }, 1100);
    }
  }

  render() {
    const { show, message } = this.props;
    const { active } = this.state;
    if (!show) {
      return null;
    }
    return (<div className={classnames('customFieldCopied', {active})}>{message}</div>)
  }
}