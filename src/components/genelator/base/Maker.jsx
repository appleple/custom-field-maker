import React, { useCallback } from 'react';
import { FieldClear } from './fieldClear';
// import stateManger from '../../lib/history';

export function Maker(props) {
  const { setField, onSubmit = () => {} } = props;

  const onClear = useCallback(() => {
    FieldClear(setField);
  }, [setField]);

  // const onBackState = () => {
  //   const { actions } = this.props;
  //   const state = stateManger.undo();
  //   if (state) {

  //     actions.setState(state);
  //   }
  // }

  return (
    <p>
      <button type="button" onClick={onClear} className="acms-admin-btn-admin" style={{ marginRight: '5px' }}>
        クリア
      </button>
      <button
        type="button"
        onClick={onSubmit}
        className="acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn"
        style={{ marginRight: '5px' }}
      >
        生成
      </button>
      {/* <button onClick={onBackState} className="acms-admin-btn-admin">
        元に戻す
      </button> */}
    </p>
  );
}
