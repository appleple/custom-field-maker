import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { XmlEntities } from 'html-entities';
import pretty from 'pretty';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/xcode.css';

const entities = new XmlEntities();

export default class Highlighter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      source: ''
    };
  }

  componentDidUpdate() {
    this.buildSource();
  }

  componentDidMount() {
    this.buildSource();
  }

  buildSource() {
    const {source} = this.state;
    const { children } = this.props;
    let html = renderToStaticMarkup(children);
    html = html.replace(/&quot;/g, '"');
    html = html.replace(/data-tmp="(.*?)"/g, '$1');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    this.code.innerHTML = entities.encode(pretty(html));
    hljs.highlightBlock(this.code);
    if (source !== this.code.innerText && this.props.onSourceGenerated) {
      this.props.onSourceGenerated(this.code.innerText);
      this.setState({
        source: this.code.innerText
      })
    }
  }

  removeReactText(html) {
    html = html.replace(/<!-- (\/?)react-text(.*?)-->/g, '');
    return html;
  }
  
  render() {
    return (
      <div>
        <pre className="acms-admin-customfield-maker"><code className="html" ref={(code) => {this.code = code}}></code></pre>
      </div>
    )
  }
}