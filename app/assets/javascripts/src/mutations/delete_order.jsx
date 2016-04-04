import {Mutation} from 'react-relay'

export default class DeleteOrderMutation extends Mutation {
  getMutation() {
    return Relay.QL`mutation { delete_order }`
  }

  getVariables() {
    return {order_id: this.props.order_id}
  }

  getFatQuery() {
    return Relay.QL`
      fragment on DeleteOrderPayload {
        food_truck {
          orders
        }
      }
    `
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {food_truck: this.props.food_truck_id}
    }]
  }
}

