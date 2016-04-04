import React from 'react'
import Relay from 'react-relay'

import FoodTruckDisplay from './display'
import CreateFoodTruck from './create'
import CreateOrder from '../orders/create'
import CreateFoodTruckMutation from '../../mutations/create_food_truck'
import CreateOrderMutation from '../../mutations/create_order'
import DeleteFoodTruckMutation from '../../mutations/delete_food_truck'
import DeleteOrderMutation from '../../mutations/delete_order'

var Index = React.createClass({
  getInitialState() {
    return ({  
      foodTrucks: [],
      fleetId: null
    })
  },

  componentDidMount() {
    console.log(this.props.user_fleet)
    this.setState({fleetId: this.props.user_fleet.fleets.edges[0].node.id})
    this.updateTruckInfo(this.props)
  },

  componentWillReceiveProps(args) {
    this.updateTruckInfo(args)
  },

  updateTruckInfo(blob) {
    if (blob.user_fleet.fleets.edges.length > 0) {
      let foodTrucks = blob.user_fleet.fleets.edges[0].node.food_trucks.edges
      this.setState({foodTrucks: foodTrucks})
    }
  },

  displayEachTruck(foodTrucks) {
    return foodTrucks.map( (foodTruck, index) => {
      let key = 'truck-display-' + index
      return <FoodTruckDisplay key={key} foodTruck={foodTruck} deleteFoodTruck={this.deleteFoodTruck} deleteOrder={this.deleteOrder} index={index}/>
    })
  },

  createFoodTruck(foodTruckDetails, createEvent) {
    foodTruckDetails['fleetId'] = this.state.fleetId
    let newFoodTruck = new CreateFoodTruckMutation(foodTruckDetails)
    Relay.Store.commitUpdate(newFoodTruck, {
      onSuccess: this.createSuccess.bind(this, createEvent),
      onFailure: this.createError
    })
  },

  createSuccess(createEventForm) {
    createEventForm.reset()
  },

  deleteSuccess() {
  },

  createError(args) {
  },

  createOrder(orderInfo, createEvent) {
    let newOrder = new CreateOrderMutation(orderInfo)
    Relay.Store.commitUpdate(newOrder, {
      onSuccess: this.createSuccess.bind(this, createEvent),
      onFailure: this.createError
    })
  },

  deleteFoodTruck(deleteInfo) {
    deleteInfo['fleetId'] = this.state.fleetId
    let newDeletion = new DeleteFoodTruckMutation(deleteInfo)
    Relay.Store.commitUpdate(newDeletion, {
      onSuccess: this.deleteSuccess,
      onFailure: this.createError
    })
  },

  deleteOrder(deleteInfo) {
    let newDeletion = new DeleteOrderMutation(deleteInfo)
    Relay.Store.commitUpdate(newDeletion, {
      onSuccess: this.deleteSuccess,
      onFailure: this.createError
    })
  },


  render() {
    return (
      <div>
        <CreateOrder createOrder={this.createOrder} foodTrucks={this.state.foodTrucks} />
        <div className='padded borders top-margined'>
          <div className='foo-small'>
            <span className='green'> 
              user_fleet: { '{'} __dataID__: '{this.props.user_fleet['__dataID__']}', 
              <span className='blue'> fleets: Object </span> {'}'}
             </span>
            <div className='display-offset'>
              <div>
                <span className='blue'>
                  fleets: {'{'} __dataID__: '{this.props.user_fleet.fleets['__dataID__']}', 
                  edges: Array[{this.props.user_fleet.fleets.edges.length}] {'}'}
                </span>

                <div className='display-offset'>
                  <div>
                    <div className='blue'>
                      edges[0] {'{'} __dataID__: '{this.props.user_fleet.fleets.edges[0]['__dataID__']}', 
                      node: Object {'}'}
                    </div>
                    <div className='display-offset'>
                      <span className='blue'>
                        node {'{'} __dataID__: '{this.props.user_fleet.fleets.edges[0].node['__dataID__']}', 
                        id: '{this.props.user_fleet.fleets.edges[0].node.id}', 
                        name: '{this.props.user_fleet.fleets.edges[0].node.name}', 
                        <span className='red'> food_trucks: Object {'}'}</span>
                      </span>
                      <div className='display-offset'>
                        <div className='red'>
                          food_trucks: {'{'} __dataID__: '{this.props.user_fleet.fleets.edges[0].node.food_trucks['__dataID__']}', 
                          edges: Array[{this.props.user_fleet.fleets.edges[0].node.food_trucks.edges.length}] {'}'}
                        </div>
                        <div className='truck-display'>
                          { this.displayEachTruck(this.state.foodTrucks) }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <CreateFoodTruck createFoodTruck={this.createFoodTruck} />
      </div>
    )
  }
})

export default Relay.createContainer(Index, {
  fragments: {
    user_fleet: () => Relay.QL`
      fragment on UserFleet {
        fleets(first: 10) {
          edges {
            node {
              id
              name
              food_trucks(first: 10) {
                edges {
                  node {
                    id
                    name
                    home_town
                    fleet_id
                    orders(first: 10) {
                      edges {
                        node {
                          id
                          tasty_item
                          food_truck_id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  }
})
