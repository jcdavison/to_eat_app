import {Mutation} from 'react-relay'

export default class CreateOrderMutation extends Mutation {
  getMutation() {
    return Relay.QL`mutation { create_order }`
  }

  getVariables() {
    return {food_truck_id: this.props.food_truck_id, tasty_item: this.props.tasty_item}
  }

  getFatQuery() {
    return Relay.QL`
      fragment on CreateOrderPayload {
        order {
          food_truck_id
          tasty_item
        },
        food_truck {
          orders
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
      fieldIDs: {food_truck: this.props.food_truck_id}
    }]
  }
}
