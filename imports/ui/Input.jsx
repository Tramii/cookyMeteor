import React, {Component} from 'react';

"use strict";
//Where users may fill in info
class Input extends Component {

  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onTextInput(e.target.value);
  }

    render() {
        return (
            <div className="input">
                <input
                  id={this.props.name}
                  autoComplete="false"
                  required type={this.props.type}
                  placeholder={this.props.placeholder}
                  value={this.props.val}
                  onChange={this.handleInputChange}/>
            </div>
        );
    }

}

export default Input;
