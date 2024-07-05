import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tooltip';

import Highlighter from '../components/highlighter';
import Field from '../components/field';
import FieldGroup from '../components/field-group';
import FieldSource from '../components/field-source';
import FieldConfirmSource from '../components/field-confirm-source';
import FieldGroupSource from '../components/field-group-source';
import FieldGroupConfirmSource from '../components/field-group-confirm-source';
import Unit from '../components/unit';
import UnitSource from '../components/unit-source';
import UnitConfirmSource from '../components/unit-confirm-source';
import UnitGroup from '../components/unit-group';
import UnitGroupSource from '../components/unit-group-source';
import UnitGroupConfirmSource from '../components/unit-group-confirm-source';
import Notify from '../components/notify';
import { STORAGENAME } from '../constants';
import * as actions from '../actions';
import columnIcon from '../assets/images/add_column.svg';
import rowIcon from '../assets/images/add_row.svg';

class CustomfieldMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'normal',
      editMode: 'source',
      tag: 'section',
      acmscss: false,
      source: '',
      copied: false,
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    const storage = JSON.parse(localStorage.getItem(STORAGENAME));
    if (storage) {
      actions.restore(storage);
    }
  }

  // renderSelectGroup() {
  //   return (
  //     <select id="type" value={type} className="acms-admin-form-width-full">
  //       <option value="text">テキスト</option>
  //       <option value="textarea">テキストエリア</option>
  //       <option value="select">セレクトボックス</option>
  //       <option value="radio">ラジオボタン</option>
  //       <option value="file">ファイル</option>
  //       <option value="image">画像</option>
  //       <option value="media">メディア</option> */
  //     </select>
  //   );
  // }

  updateState(prop, value) {
    this.setState({
      [prop]: value,
    });
  }

  setSource(source) {
    this.setState({
      source,
    });
  }

  clearCustomfield() {
    const { actions } = this.props;
    if (confirm('履歴を削除してもよろしいですか？')) {
      actions.clearCustomfield();
    }
  }

  clearGroupItem() {
    const { actions } = this.props;
    if (confirm('履歴を削除してもよろしいですか？')) {
      actions.clearGroupItem();
    }
  }

  clearCustomUnit() {
    const { actions } = this.props;
    if (confirm('履歴を削除してもよろしいですか？')) {
      actions.clearCustomUnit();
    }
  }

  clearUnitGroupItem() {
    const { actions } = this.props;
    if (confirm('履歴を削除してもよろしいですか？')) {
      actions.clearUnitGroupItem();
    }
  }

  render() {
<<<<<<< HEAD
    const { mode, editMode, source, copied } = this.state;
    const {
      actions,
      customfield,
      groupitems,
      customunit,
      unitgroupitems,
      groupTitle,
      unitGroupTitle,
      unitGroupName,
      groupName,
      acmscss,
      jsValidator,
      direction,
    } = this.props;
=======
    const { mode, editMode, source, copied, tag } = this.state;
<<<<<<< HEAD:src/containers/index.js
    const { actions, customfield, groupitems,
      customunit, unitgroupitems, groupTitle,
      unitGroupTitle, unitGroupName,
      groupName, acmscss, jsValidator, direction } = this.props;
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
=======
    const {
      actions,
      customfield,
      groupitems,
      customunit,
      unitgroupitems,
      groupTitle,
      unitGroupTitle,
      unitGroupName,
      groupName,
      acmscss,
      jsValidator,
      direction,
    } = this.props;
>>>>>>> 5763b9c (global state 持ち方を修正):src/containers/_index.js

    return (
      <div className="acms-admin-form">
        <div className="acms-admin-form-radio">
          <input
            type="radio"
            value="normal"
            id="input-radio-mode-normal"
            checked={mode === 'normal'}
            onChange={this.updateState.bind(this, 'mode', 'normal')}
          />
          <label htmlFor="input-radio-mode-normal">
            <i className="acms-admin-ico-radio" />
            カスタムフィールド
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input
            type="radio"
            value="group"
            id="input-radio-mode-group"
            checked={mode === 'group'}
            onChange={this.updateState.bind(this, 'mode', 'group')}
          />
          <label htmlFor="input-radio-mode-group">
            <i className="acms-admin-ico-radio" />
            カスタムフィールドグループ
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input
            type="radio"
            value="unit"
            id="input-radio-mode-unit"
            checked={mode === 'unit'}
            onChange={this.updateState.bind(this, 'mode', 'unit')}
          />
          <label htmlFor="input-radio-mode-unit">
            <i className="acms-admin-ico-radio" />
            カスタムユニット
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input
            type="radio"
            value="unit-group"
            id="input-radio-mode-unit-group"
            checked={mode === 'unit-group'}
            onChange={this.updateState.bind(this, 'mode', 'unit-group')}
          />
          <label htmlFor="input-radio-mode-unit-group">
            <i className="acms-admin-ico-radio" />
            カスタムユニット（フィールドグループ）
          </label>
        </div>
        {mode === 'normal' && <Field actions={actions} />}
        {mode === 'group' && <FieldGroup actions={actions} />}
        {mode === 'unit' && <Unit actions={actions} />}
        {mode === 'unit-group' && <UnitGroup actions={actions} />}

        <div className="acms-admin-tabs">
          <ul className="customFieldTabs">
            <li>
              <a
                href="#source"
                className={classnames({ customFieldTabActive: editMode === 'source' })}
                onClick={this.updateState.bind(this, 'editMode', 'source')}
              >
                入力用ソース
              </a>
            </li>
            <li>
              <a
                href="#preview"
                className={classnames({ customFieldTabActive: editMode === 'preview' })}
                onClick={this.updateState.bind(this, 'editMode', 'preview')}
              >
                プレビュー
              </a>
            </li>
            <li>
              <a
                href="#confirm"
                className={classnames({ customFieldTabActive: editMode === 'confirm' })}
                onClick={this.updateState.bind(this, 'editMode', 'confirm')}
              >
                出力用ソース
              </a>
            </li>
          </ul>
          <div className="acms-admin-tabs-panel">
            <div style={{ backgroundColor: '#F1F1F1', padding: '20px 15px' }}>
              <div className="clearfix">
                <div className="acms-admin-form-checkbox" style={{ marginTop: '5px' }}>
                  <input type="checkbox" onChange={actions.toggleAcmsCss} checked={acmscss} id="acmscss-checkbox" />
                  <label htmlFor="acmscss-checkbox">
                    <i className="acms-admin-ico-checkbox" />
                    acms-admin.cssを使用する
                  </label>
                </div>
<<<<<<< HEAD:src/containers/index.js
                {(mode === 'normal' || mode === 'group') && (
=======

<<<<<<< HEAD
                {(mode === 'normal' || mode === 'group') &&
>>>>>>> 5763b9c (global state 持ち方を修正):src/containers/_index.js
=======
                {(mode === 'normal' || mode === 'group') && (
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                  <div className="acms-admin-form-checkbox" style={{ marginTop: '5px' }}>
                    <input
                      type="checkbox"
                      onChange={actions.toggleJsValidator}
                      checked={jsValidator}
                      id="jsvalidator-checkbox"
                    />
                    <label htmlFor="jsvalidator-checkbox">
                      <i className="acms-admin-ico-checkbox" />
                      JavaScriptによるバリデートを使用する
                    </label>
                  </div>
                )}

<<<<<<< HEAD
<<<<<<< HEAD
                {mode === 'normal' && (
                  <button
                    onClick={this.clearCustomfield.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {mode === 'group' && (
                  <button
                    onClick={this.clearGroupItem.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {mode === 'unit' && (
                  <button
                    onClick={this.clearCustomUnit.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {mode === 'unit-group' && (
                  <button
                    onClick={this.clearUnitGroupItem.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {editMode !== 'preview' && (
=======
                {mode === 'normal' &&
                  <select id="tag" onChange={(e) => this.updateState('tag', e.target.value)}  className="acms-admin-form-width-quarter">
=======
                {mode === 'normal' && (
                  <select
                    id="tag"
                    onChange={(e) => this.updateState('tag', e.target.value)}
                    className="acms-admin-form-width-quarter"
                  >
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                    <option value="section">--</option>
                    <option value="table">table</option>
                  </select>
                )}

<<<<<<< HEAD
                {mode === 'normal' && <button onClick={this.clearCustomfield.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {mode === 'group' && <button onClick={this.clearGroupItem.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {mode === 'unit' && <button onClick={this.clearCustomUnit.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {mode === 'unit-group' && <button onClick={this.clearUnitGroupItem.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {editMode !== 'preview' &&
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
=======
                {mode === 'normal' && (
                  <button
                    onClick={this.clearCustomfield.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {mode === 'group' && (
                  <button
                    onClick={this.clearGroupItem.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {mode === 'unit' && (
                  <button
                    onClick={this.clearCustomUnit.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {mode === 'unit-group' && (
                  <button
                    onClick={this.clearUnitGroupItem.bind(this)}
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                  >
                    履歴クリア
                  </button>
                )}
                {editMode !== 'preview' && (
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                  <div style={{ display: 'inline-block', position: 'relative', float: 'right', marginRight: '10px' }}>
                    <CopyToClipboard text={source} onCopy={() => this.setState({ copied: true })}>
                      <button className="acms-admin-btn-admin">コードをコピー</button>
                    </CopyToClipboard>
                    <Notify
                      message="クリップボードにコピーしました"
                      show={copied}
                      onFinish={() => {
                        this.setState({ copied: false });
                      }}
                    />
                  </div>
                )}

                {(mode === 'group' || mode === 'unit-group') && (
                  <div style={{ marginTop: '5px' }}>
                    <span className="customFieldDirectionBtnGroupSide">ソースの追加方法</span>
                    <div className="customFieldDirectionBtnGroup">
                      <label
                        htmlFor="direction-horizontal"
                        className={classnames('customFieldDirectionBtn', {
                          active: direction === 'horizontal',
                        })}
<<<<<<< HEAD
                        data-tooltip-id="group-field-direction-horizontal"
=======
                        data-tip
                        data-for="group-field-direction-horizontal"
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                      >
                        <input
                          type="radio"
                          id="direction-horizontal"
                          onChange={() => {
                            actions.changeDirection('horizontal');
                          }}
                          checked={direction === 'horizontal'}
                        />
                        <img src={columnIcon} />
                      </label>
                      <label
                        htmlFor="direction-vertical"
                        className={classnames('customFieldDirectionBtn', {
                          active: direction === 'vertical',
                        })}
<<<<<<< HEAD
                        data-tooltip-id="group-field-direction-vertical"
=======
                        data-tip
                        data-for="group-field-direction-vertical"
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                      >
                        <input
                          type="radio"
                          id="direction-vertical"
                          onChange={() => {
                            actions.changeDirection('vertical');
                          }}
                          checked={direction === 'vertical'}
                        />
                        <img src={rowIcon} />
                      </label>
                    </div>
<<<<<<< HEAD
                    <Tooltip
                      id="group-field-direction-vertical"
                      place="top"
                      variant="dark"
=======
                    <ReactTooltip
                      id="group-field-direction-vertical"
                      place="top"
                      type="dark"
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>縦向きレイアウト用にソースコードを生成します。</span>
<<<<<<< HEAD
                    </Tooltip>
                    <Tooltip
                      id="group-field-direction-horizontal"
                      place="top"
                      variant="dark"
=======
                    </ReactTooltip>
                    <ReactTooltip
                      id="group-field-direction-horizontal"
                      place="top"
                      type="dark"
                      effect="solid"
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>横向きレイアウト用にソースコードを生成します。</span>
                    </Tooltip>
                  </div>
                )}
              </div>
              {editMode === 'source' && (
                <Highlighter onSourceGenerated={this.setSource.bind(this)}>
<<<<<<< HEAD
<<<<<<< HEAD
                  {mode === 'normal' && (
                    <FieldSource customfield={customfield} acmscss={acmscss} jsValidator={jsValidator} />
                  )}
                  {mode === 'group' && (
                    <FieldGroupSource
                      groupitems={groupitems}
                      acmscss={acmscss}
                      jsValidator={jsValidator}
                      groupTitle={groupTitle}
                      groupName={groupName}
                      direction={direction}
                    />
                  )}
=======
                  {mode === 'normal' &&
                    <FieldSource
                      customfield={customfield}
                      acmscss={acmscss}
                      jsValidator={jsValidator}
                      tag={tag}>
                      <FieldSource.Section />
                      {/* <FieldSource.Table /> */}
                    </FieldSource>
                  }
                  {mode === 'group' && <FieldGroupSource groupitems={groupitems} acmscss={acmscss} jsValidator={jsValidator} groupTitle={groupTitle} groupName={groupName} direction={direction} />}
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
                  {mode === 'unit' && <UnitSource customunit={customunit} acmscss={acmscss} />}
                  {mode === 'unit-group' && (
                    <UnitGroupSource
                      unitgroupitems={unitgroupitems}
                      acmscss={acmscss}
                      jsValidator={jsValidator}
                      unitGroupTitle={unitGroupTitle}
                      unitGroupName={unitGroupName}
                      direction={direction}
                    />
                  )}
                </Highlighter>
              )}
              {editMode === 'preview' && (
                <div className="customFieldPreview">
<<<<<<< HEAD
                  {mode === 'normal' && <FieldSource customfield={customfield} acmscss={acmscss} preview />}
                  {mode === 'group' && (
                    <FieldGroupSource
                      groupitems={groupitems}
                      acmscss={acmscss}
                      groupTitle={groupTitle}
                      groupName={groupName}
                      preview
                      direction={direction}
                    />
                  )}
=======
                  {mode === 'normal' &&
                    <FieldSource
                      customfield={customfield}
=======
                  {mode === 'normal' && (
                    <FieldSource customfield={customfield} acmscss={acmscss} jsValidator={jsValidator} tag={tag}>
                      <FieldSource.Section />
                      {/* <FieldSource.Table /> */}
                    </FieldSource>
                  )}
                  {mode === 'group' && (
                    <FieldGroupSource
                      groupitems={groupitems}
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                      acmscss={acmscss}
                      jsValidator={jsValidator}
                      groupTitle={groupTitle}
                      groupName={groupName}
                      direction={direction}
                    />
                  )}
                  {mode === 'unit' && <UnitSource customunit={customunit} acmscss={acmscss} />}
                  {mode === 'unit-group' && (
                    <UnitGroupSource
                      unitgroupitems={unitgroupitems}
                      acmscss={acmscss}
                      jsValidator={jsValidator}
                      unitGroupTitle={unitGroupTitle}
                      unitGroupName={unitGroupName}
                      direction={direction}
                    />
                  )}
                </Highlighter>
              )}
              {editMode === 'preview' && (
                <div className="customFieldPreview">
                  {mode === 'normal' && (
                    <FieldSource customfield={customfield} acmscss={acmscss} tag={tag} preview>
                      <FieldSource.Section />
                      <FieldSource.Table />
                    </FieldSource>
<<<<<<< HEAD
                  }
                  {mode === 'group' && <FieldGroupSource groupitems={groupitems} acmscss={acmscss} groupTitle={groupTitle} groupName={groupName} preview direction={direction} />}
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
=======
                  )}
                  {mode === 'group' && (
                    <FieldGroupSource
                      groupitems={groupitems}
                      acmscss={acmscss}
                      groupTitle={groupTitle}
                      groupName={groupName}
                      preview
                      direction={direction}
                    />
                  )}
>>>>>>> 4399586 (build: update prrttier & add .editorconfig)
                  {mode === 'unit' && <UnitSource customunit={customunit} acmscss={acmscss} preview />}
                  {mode === 'unit-group' && (
                    <UnitGroupSource
                      unitgroupitems={unitgroupitems}
                      acmscss={acmscss}
                      unitGroupTitle={unitGroupTitle}
                      unitGroupName={unitGroupName}
                      preview
                      direction={direction}
                    />
                  )}
                </div>
              )}
              {editMode === 'confirm' && (
                <Highlighter onSourceGenerated={this.setSource.bind(this)}>
                  {mode === 'normal' && <FieldConfirmSource customfield={customfield} acmscss={acmscss} />}
                  {mode === 'group' && (
                    <FieldGroupConfirmSource
                      groupitems={groupitems}
                      acmscss={acmscss}
                      groupTitle={groupTitle}
                      groupName={groupName}
                      direction={direction}
                    />
                  )}
                  {mode === 'unit' && <UnitConfirmSource customunit={customunit} acmscss={acmscss} />}
                  {mode === 'unit-group' && (
                    <UnitGroupConfirmSource
                      unitgroupitems={unitgroupitems}
                      acmscss={acmscss}
                      unitGroupTitle={unitGroupTitle}
                      unitGroupName={unitGroupName}
                      direction={direction}
                    />
                  )}
                </Highlighter>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomfieldMaker);
