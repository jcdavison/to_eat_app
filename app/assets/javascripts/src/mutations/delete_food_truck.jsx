import {Mutation} from 'react-relay'

export default class DeleteFoodTruckMutation extends Mutation {
  getMutation() {
    return Relay.QL`mutation { delete_food_truck }`
  }

  getVariables() {
    return {food_truck_id: this.props.food_truck_id}
  }

  getFatQuery() {
    return Relay.QL`
      fragment on DeleteFoodTruckPayload {
        fleet {
          food_trucks
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
