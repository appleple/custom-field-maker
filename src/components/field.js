import React from 'react';
import ReactTooltip from 'react-tooltip';
import Base from './base';

export default class Field extends Base {

  constructor(props) {
    super(props);
    this.state = {
      type: "text",
      title: "",
      name: "",
      tooltip: "",
      alert: "",
      duplicatedField: "",
      path: "path",
      converter: "",
      normal: "size",
      resize: "true",
      option: [{
        value: "",
        label: ""
      }],
      validator: [{
        option: "",
        value: "",
        message: ""
      }],
      optionFormat: "pref",
      openValidator: false,
      openConverter: false,
      noSearch: false
    };
  }

  submit() {
    const { name, type, title } = this.state;
    const { actions } = this.props;
    if (name && type 　&& title) {
      actions.addCustomfield(this.state);
    } else {
      this.setState({
        alert: true
      })
    }
  }

  render() {
    const { type, title, name, tooltip } = this.state;
    return (
      <div>
        <h2 className="acms-admin-admin-title2">カスタムフィールド</h2>
        <div className="acms-admin-filter">
          {this.renderModal()}
          {this.renderBasic()}
          <div className="customFieldLine"></div>
          {type === 'select' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'radio' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'checkbox' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'image' &&
            <div>
              {this.renderImage()}
              {this.renderImageResize()}
            </div>
          }
          {type === 'file' &&
            <div>
              {this.renderFile()}
            </div>
          }
          {this.renderValidator()}
          {this.renderMake()}
        </div>
      </div>
    )
  }
}
