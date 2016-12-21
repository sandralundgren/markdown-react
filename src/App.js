import React, { Component } from 'react';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      textareaInput: "Heading\n=======\r\n\r\nSub-heading\r\n-----------\r\n\r\n### Another deeper heading\r\n\r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a\r\nline break\r\n\r\nText attributes *italic*, **bold**,\r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n *[Herman Fassett](https:\/\/freecodecamp.com\/hermanfassett)*"
    };
  }

  _createMarkup(value) {
    let converted = marked(value);
    return {__html: converted}; 
  }

  _change(e) {
    this.setState({ textareaInput: e.target.value });    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Previewer</h2>
        </div>
        <div className="main" role="main">
          <div className="container-input">
            <textarea name="textarea" value={this.state.textareaInput}
            onChange={this._change.bind(this)} className="input-textarea" rows="35" cols="60"></textarea>
          </div>
          <div className="container-output">
            <div dangerouslySetInnerHTML={this._createMarkup(this.state.textareaInput)}></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
