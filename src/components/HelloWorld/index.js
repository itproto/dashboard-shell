import React, {Component} from 'react';

import styles from './style.css';

class HelloWorld extends Component{

  render(){
    return (
          <div className="{styles.hello}">
            {this.props.greetText}
          </div>
    );
  }

}

export default HelloWorld;
