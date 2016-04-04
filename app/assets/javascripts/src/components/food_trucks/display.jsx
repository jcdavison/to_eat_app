import React from 'react'
import Relay from 'react-relay'

import OrderDisplay from '../orders/display'
export default React.createClass({

  getInitialState() {
    return ({  
      ordersDisplay: []
    })
  },

  componentDidMount() {
    this.renderOrders(this.props.foodTruck.node.orders.edges)
  },

  componentWillReceiveProps(args) {
    this.renderOrders(args.foodTruck.node.orders.edges)
  },

  renderOrders(orders) {
    let ordersDisplay = orders.map( (order, index) => {
      return <OrderDisplay order={order} key={'order-display-' + index} deleteOrder={this.props.deleteOrder} index={index}/>
    })
    this.setState({ordersDisplay: ordersDisplay})
  },

  deleteFoodTruck() {
    this.props.deleteFoodTruck({food_truck_id: this.props.foodTruck.node.id})
  },

  render() {
    return (
      <div className='display-offset'>
        <span className='red'>edge[{this.props.index}] {'{'} __dataID__: '{this.props.foodTruck['__dataID__']}', node: Object {'}'}</span>

        <div className='display-offset'>
          <span className='red'>node {'{'} 
            __dataID__: '{this.props.foodTruck.node['__dataID__']}',
            id: '{this.props.foodTruck.node.id}', fleet_id: '{this.props.foodTruck.node.fleet_id}', name: '{this.props.foodTruck.node.name}', <span className='black'>orders: Object {'}'} </span></span>
          <span className='light-red pointer delete' onClick={this.deleteFoodTruck}> X</span>
          <div className='display-offset'>orders: {'{'} __dataID__: '{this.props.foodTruck.node.orders['__dataID__']}', edges: Array[{this.props.foodTruck.node.orders.edges.length}] {'}'} 
            <div className='orders-display'>{this.state.ordersDisplay}</div>
          </div>
        </div>
        
      </div>
    )
  }
})
