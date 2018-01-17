import React, { Component } from 'react';
import { XmlEntities } from 'html-entities';
import pretty from 'pretty';
import hljs from 'highlight.js';
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
    let html = this.source.innerHTML;
    html = this.removeReactText(html);
    html = html.replace(/data-tmp="(.*?)"/g, '$1');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    html = html.replace(/<div>(([\\n\\r\\t]|.)*?)<\/div>/g, '$1');
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
        <div ref={(source) => {this.source = source}} style={{display:'none'}}>{this.props.children}</div>
        <pre><code className="html" ref={(code) => {this.code = code}}></code></pre>
      </div>
    )
  }
}