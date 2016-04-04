import {Mutation} from 'react-relay'

export default class CreateFoodTruckMutation extends Mutation {
  getMutation() {
    return Relay.QL`mutation { create_food_truck }`
  }

  getVariables() {
    return {name: this.props.name, home_town: this.props.home_town}
  }

  getFatQuery() {
    return Relay.QL`
      fragment on CreateFoodTruckPayload {
        food_truck {
          name
          home_town
        },
        fleet {
          food_trucks
          id
          name
        }
      }
    `
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {fleet: this.props.fleetId }
    }]
  }
}
