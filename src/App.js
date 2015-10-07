// Put stuff you want on every screen here

import React, { Component, PropTypes } from 'react';

require('./styles/_type-utilities.scss');


class App extends Component{
  render(){
    return (
      <div className="u-caps">Global Stuff Goes Here</div>
    )
  }
};

export default App;