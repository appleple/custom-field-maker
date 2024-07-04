import React, { Component } from 'react';
import classnames from 'classnames';

export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.open) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 1);
    }
  }

  hideDialog() {
    const { onClose } = this.props;
    this.setState({
      show: false,
    });
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
      <div className={classnames('acms-admin-modal', { in: show })} id="converter" style={style}>
        <div className="acms-admin-modal-dialog" role="dialog" aria-modal>
          <div className="acms-admin-modal-content">
<<<<<<< HEAD
            <header className="acms-admin-modal-header">
              <h3 className="acms-admin-modal-heading">{title}</h3>
              <button type="button" className="acms-admin-modal-hide" onClick={this.hideDialog.bind(this)} aria-label="モーダルを閉じる">
                <i className="acms-admin-icon-delete"></i>
              </button>
            </header>
=======
            <div className="acms-admin-modal-header">
              <i className="acms-admin-modal-hide acms-admin-icon-delete" onClick={this.hideDialog.bind(this)} />
              <h3>{title}</h3>
            </div>
>>>>>>> 51184c2 (build: eslint を導入)
            <div className="acms-admin-modal-body">
              <div className="acms-admin-padding-small clearfix">{children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
