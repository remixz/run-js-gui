import React, { Component } from 'react'

class InstanceList extends Component {
  render () {
    console.log(this.props)
    return (
      <ul className="instance-list">
        {this.props.instances.map((instance, i) => (
          <li key={i}> {instance.dir} </li>
        ))}
      </ul>
    )
  }
}

export default InstanceList
