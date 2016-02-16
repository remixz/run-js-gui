import React, { Component } from 'react'

class CreateInstance extends Component {
  render () {
    return (
      <div className="create-instance">
        <button onClick={this.props.addInstance}> Choose directory </button>
      </div>
    )
  }
}

export default CreateInstance
