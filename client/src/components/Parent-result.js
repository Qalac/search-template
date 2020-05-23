import React, { Component } from 'react';
import Result from './result/result';

class ParentResult extends Component {
  
  render() {
    return(
          <div>
              <Result response={this.state.list} />
          </div>
        );
      }
    }

export default ParentResult;
