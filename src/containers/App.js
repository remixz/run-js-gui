import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInstance } from '../actions'
import InstanceList from '../components/InstanceList'
import CreateInstance from '../components/CreateInstance'

class App extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="main">
        <h1> run-js </h1>
        <InstanceList instances={this.props.instances} />
        <CreateInstance addInstance={this.props.addInstance} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  return { instances: state.instancesList.instances }
}

export default connect(mapStateToProps, { addInstance })(App)
