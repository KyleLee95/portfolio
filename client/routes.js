import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  ConnectedEditProject,
  EditThought,
  ConnectedPortfolio,
  ConnectedProgramming,
  ConnectedContentManager,
  About,
  Mood,
  ConnectedThoughts,
  SingleThought
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={ConnectedPortfolio} />
        <Route exact path="/thought/:id" component={SingleThought} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/manager" component={ConnectedContentManager} />
        <Route path="/programming" component={ConnectedProgramming} />
        <Route path="/info" component={About} />
        <Route path="/mood" component={Mood} />
        <Route path="/thoughts" component={ConnectedThoughts} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={ConnectedContentManager} />
            <Route
              exact
              path="/edit/project/:id"
              component={ConnectedEditProject}
            />
            <Route exact path="/edit/thought/:id" component={EditThought} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={ConnectedPortfolio} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
