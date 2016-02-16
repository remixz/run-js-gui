import React, { Component } from 'react'

class InstanceList extends Component {
  render () {
    return (
      <ul className="instance-list">
        {this.props.instances.map((instance, i) => (
          <li key={i}>
           {instance.dir}
           <br /><a href={`http://localhost:${instance.port}`}> Open </a>
           <button onClick={this.props.toggleInstanceState.bind(this, instance)}> {instance.running ? 'Stop': 'Start'} </button>
           <button onClick={this.props.deleteInstance.bind(this, instance)}> Delete </button>
           </li>
        ))}
      </ul>
    )
  }
}

export default InstanceList
