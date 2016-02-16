import React, { Component } from 'react'

class CreateInstance extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="create-instance">
        <button onClick={this.props.addInstance}> Choose directory </button>
      </div>
    )
  }
}

export default CreateInstance
