import React, { Component } from 'react';
import { XmlEntities } from 'html-entities';
import { html as beautifyHtml } from 'js-beautify';
import hljs from 'highlight.js';
const entities = new XmlEntities();

export default class Highlighter extends Component {

  componentDidUpdate() {
    this.buildSource();
  }

  componentDidMount() {
    this.buildSource();
  }

  buildSource() {
    let html = this.source.innerHTML;
    html = this.removeReactText(html);
    html = html.replace(/data-tmp="(.*?)"/g, '$1');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    html = html.replace(/<div>/g, '');
    html = html.replace(/<\/div>/g, '');
    this.code.innerHTML = entities.encode(beautifyHtml(html, {
      indentInnerHtml: true
    }));
    hljs.highlightBlock(this.code);
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