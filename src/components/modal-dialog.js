import React, { Component } from 'react';
import classnames from 'classnames';

export default class ModalDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentWillReceiveProps(props) {
    if (props.open) {
      setTimeout(() => {
        this.setState({
          show: true
        });
      }, 1);
    }
  }

  hideDialog() {
    const { onClose } = this.props;
    this.setState({
      show: false
    })
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 300);
    }
  }

  render() {
    const { children, title, open } = this.props;
    const { show } = this.state;
    const style = {};
    if (open) {
      style.display = 'block';
    } else {
      style.display = 'none';
    }

    return (
      <div className={classnames("acms-admin-modal", {"in": show})} id="converter" style={style}>
        <div className="acms-admin-modal-dialog">
          <div className="acms-admin-modal-content">
            <div className="acms-admin-modal-header">
              <i className="acms-admin-modal-hide acms-admin-icon-delete" onClick={this.hideDialog.bind(this)}></i>
              <h3>{title}</h3>
            </div>
            <div className="acms-admin-modal-body">
              <div className="acms-admin-padding-small clearfix">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}