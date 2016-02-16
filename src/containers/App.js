import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInstance, startInstance, stopInstance, deleteInstance } from '../actions'
import InstanceList from '../components/InstanceList'
import CreateInstance from '../components/CreateInstance'

class App extends Component {
  toggleInstanceState (instance) {
    if (instance.running) {
      this.props.stopInstance(instance.dir)
    } else {
      this.props.startInstance(instance.dir)
    }
  }

  deleteInstance (instance) {
    this.props.deleteInstance(instance.dir)
  }

  render () {
    return (
      <div className="main">
        <h1> run-js </h1>
        <InstanceList instances={this.props.instances} toggleInstanceState={this.toggleInstanceState.bind(this)} deleteInstance={this.props.deleteInstance.bind(this)} />
        <CreateInstance addInstance={this.props.addInstance} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { instances: state.instancesList.instances }
}

export default connect(mapStateToProps, { addInstance, startInstance, stopInstance, deleteInstance })(App)
