import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';

export function ModalDialog(props) {
  const { children, title, open, onClose = () => {} } = props;
  const [show, setShow] = useState(false);

  const hideDialog = useCallback(() => {
    setShow(false);
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 300);
    }
  }, [setShow, onClose]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShow(true);
      }, 1);
    } else {
      hideDialog();
    }
  }, [open, hideDialog]);

  return (
    <div
      className={classnames('acms-admin-modal', { in: show })}
      id="converter"
      aria-hidden={show ? 'false' : 'true'}
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className="acms-admin-modal-dialog">
        <div className="acms-admin-modal-content">
          <div className="acms-admin-modal-header">
            <i
              className="acms-admin-modal-hide acms-admin-icon-delete"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  hideDialog();
                }
              }}
              onClick={hideDialog}
              role="button"
              tabIndex={0}
            />
            <h3>{title}</h3>
          </div>
          <div className="acms-admin-modal-body">
            <div className="acms-admin-padding-small clearfix">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
