
import React from 'react'
import { Route, browserHistory } from 'react-router'
import { RelayRouter } from 'react-router-relay'

import ToEatIndex from './components/food_trucks/index.jsx'

const UserFleetQueries = {
  user_fleet: () => Relay.QL`query { user_fleet }`
}

export default function ToEatApp() {
  return (
    <RelayRouter history={browserHistory} forceFetch={true}>
      <Route path="/" queries={UserFleetQueries} component={ToEatIndex} />
    </RelayRouter>
  )
}
