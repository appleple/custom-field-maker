import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';

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
      acmscss: false,
      source: '',
      copied: false
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    const storage = JSON.parse(localStorage.getItem(STORAGENAME));
    if (storage) {
      actions.restore(storage);
    }
  }

  renderSelectGroup() {
    return (
      <select id="type" value={type} className="acms-admin-form-width-full">
        <option value="text">テキスト</option>
        <option value="textarea">テキストエリア</option>
        <option value="select">セレクトボックス</option>
        <option value="radio">ラジオボタン</option>
        <option value="file">ファイル</option>
        <option value="image">画像</option>
        <option value="media">メディア</option>
      </select>
    );
  }

  updateState(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  setSource(source) {
    this.setState({
      source
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
    const { mode, editMode, source, copied } = this.state;
    const { actions, customfield, groupitems,
      customunit, unitgroupitems, groupTitle,
      unitGroupTitle, unitGroupName,
      groupName, acmscss, jsValidator, direction } = this.props;

    return (
      <div className="acms-admin-form">
        <div className="acms-admin-form-radio">
          <input type="radio" value="normal" id="input-radio-mode-normal" checked={mode === 'normal'} onChange={this.updateState.bind(this, 'mode', 'normal')} />
          <label htmlFor="input-radio-mode-normal">
            <i className="acms-admin-ico-radio" />
            カスタムフィールド
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input type="radio" value="group" id="input-radio-mode-group" checked={mode === 'group'} onChange={this.updateState.bind(this, 'mode', 'group')} />
          <label htmlFor="input-radio-mode-group">
            <i className="acms-admin-ico-radio" />
            カスタムフィールドグループ
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input type="radio" value="unit" id="input-radio-mode-unit" checked={mode === 'unit'} onChange={this.updateState.bind(this, 'mode', 'unit')} />
          <label htmlFor="input-radio-mode-unit">
            <i className="acms-admin-ico-radio" />
            カスタムユニット
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input type="radio" value="unit-group" id="input-radio-mode-unit-group" checked={mode === 'unit-group'} onChange={this.updateState.bind(this, 'mode', 'unit-group')} />
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
            <li><a href="#source" className={classnames({ customFieldTabActive: editMode === 'source' })} onClick={this.updateState.bind(this, 'editMode', 'source')}>入力用ソース</a></li>
            <li><a href="#preview" className={classnames({ customFieldTabActive: editMode === 'preview' })} onClick={this.updateState.bind(this, 'editMode', 'preview')}>プレビュー</a></li>
            <li><a href="#confirm" className={classnames({ customFieldTabActive: editMode === 'confirm' })} onClick={this.updateState.bind(this, 'editMode', 'confirm')}>出力用ソース</a></li>
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
                {(mode === 'normal' || mode === 'group') &&
                  <div className="acms-admin-form-checkbox" style={{ marginTop: '5px' }}>
                    <input type="checkbox" onChange={actions.toggleJsValidator} checked={jsValidator} id="jsvalidator-checkbox" />
                    <label htmlFor="jsvalidator-checkbox">
                      <i className="acms-admin-ico-checkbox" />
                      JavaScriptによるバリデートを使用する
                    </label>
                  </div>
                }

                {mode === 'normal' && <button onClick={this.clearCustomfield.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {mode === 'group' && <button onClick={this.clearGroupItem.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {mode === 'unit' && <button onClick={this.clearCustomUnit.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {mode === 'unit-group' && <button onClick={this.clearUnitGroupItem.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right">履歴クリア</button>}
                {editMode !== 'preview' &&
                  <div style={{ display: 'inline-block', position: 'relative', float: 'right', marginRight: '10px' }}>
                    <CopyToClipboard text={source} onCopy={() => this.setState({ copied: true })}>
                      <button className="acms-admin-btn-admin">コードをコピー</button>
                    </CopyToClipboard>
                    <Notify message="クリップボードにコピーしました" show={copied} onFinish={() => { this.setState({ copied: false }); }} />
                  </div>
                }

                {(mode === 'group' || mode === 'unit-group') &&
                  <div style={{ marginTop: '5px' }}>
                    <span className="customFieldDirectionBtnGroupSide">ソースの追加方法</span>
                    <div className="customFieldDirectionBtnGroup">
                      <label
                        htmlFor="direction-horizontal" className={classnames('customFieldDirectionBtn', {
                          active: direction === 'horizontal'
                        })}
                        data-tip data-for="group-field-direction-horizontal"
                      >
                        <input
                          type="radio" id="direction-horizontal"
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
                          active: direction === 'vertical'
                        })}
                        data-tip data-for="group-field-direction-vertical"
                      >
                        <input
                          type="radio" id="direction-vertical"
                          onChange={() => {
                            actions.changeDirection('vertical');
                          }}
                          checked={direction === 'vertical'}
                        />
                        <img src={rowIcon} />
                      </label>
                    </div>
                    <ReactTooltip id="group-field-direction-vertical" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                      <span>縦向きレイアウト用にソースコードを生成します。</span>
                    </ReactTooltip>
                    <ReactTooltip id="group-field-direction-horizontal" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                      <span>横向きレイアウト用にソースコードを生成します。</span>
                    </ReactTooltip>
                  </div>
                }
              </div>
              {editMode === 'source' &&
                <Highlighter onSourceGenerated={this.setSource.bind(this)}>
                  {mode === 'normal' && <FieldSource customfield={customfield} acmscss={acmscss} jsValidator={jsValidator} />}
                  {mode === 'group' && <FieldGroupSource groupitems={groupitems} acmscss={acmscss} jsValidator={jsValidator} groupTitle={groupTitle} groupName={groupName} direction={direction} />}
                  {mode === 'unit' && <UnitSource customunit={customunit} acmscss={acmscss} />}
                  {mode === 'unit-group' && <UnitGroupSource unitgroupitems={unitgroupitems} acmscss={acmscss} jsValidator={jsValidator} unitGroupTitle={unitGroupTitle} unitGroupName={unitGroupName} direction={direction} />}
                </Highlighter>}
              {editMode === 'preview' &&
                <div className="customFieldPreview">
                  {mode === 'normal' && <FieldSource customfield={customfield} acmscss={acmscss} preview />}
                  {mode === 'group' && <FieldGroupSource groupitems={groupitems} acmscss={acmscss} groupTitle={groupTitle} groupName={groupName} preview direction={direction} />}
                  {mode === 'unit' && <UnitSource customunit={customunit} acmscss={acmscss} preview />}
                  {mode === 'unit-group' && <UnitGroupSource unitgroupitems={unitgroupitems} acmscss={acmscss} unitGroupTitle={unitGroupTitle} unitGroupName={unitGroupName} preview direction={direction} />}
                </div>}
              {editMode === 'confirm' &&
                <Highlighter onSourceGenerated={this.setSource.bind(this)}>
                  {mode === 'normal' && <FieldConfirmSource customfield={customfield} acmscss={acmscss} />}
                  {mode === 'group' && <FieldGroupConfirmSource groupitems={groupitems} acmscss={acmscss} groupTitle={groupTitle} groupName={groupName} direction={direction} />}
                  {mode === 'unit' && <UnitConfirmSource customunit={customunit} acmscss={acmscss} />}
                  {mode === 'unit-group' && <UnitGroupConfirmSource unitgroupitems={unitgroupitems} acmscss={acmscss} unitGroupTitle={unitGroupTitle} unitGroupName={unitGroupName} direction={direction} />}
                </Highlighter>
              }
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
