import React, { Component } from 'react'

export default class NotFound extends Component <any, any>{
  
  constructor(props){
    super(props);
    const { staticContext } = this.props;
    staticContext && (staticContext.NotFound = true)
  }
  
  render() {
    return (
      <div>
        404
      </div>
    )
  }
}
