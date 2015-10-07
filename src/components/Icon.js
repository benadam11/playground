import {Component} from 'react';

class Icon extends Component{

  render(){
    switch(this.props.type){

      case 'icon-1':
        return (
          <svg></svg>
        )

      case 'icon-2':
        return (
          <svg></svg>
        )

      case 'icon-3':
        return (
          <svg></svg>
        )

    }
  }
}

export default = Icon;