import React from 'react'
import Relay from 'react-relay'

export default React.createClass({

  componentDidMount() {
  },

  deleteOrder() {
    let orderInfo = {order_id: this.props.order.node.id, food_truck_id: this.props.order.node.food_truck_id}
    this.props.deleteOrder(orderInfo)
  },

  render() {
    return (
      <div className='display-offset'>

        <span className=''>edges[{this.props.index}] {'{'} __dataID__: '{this.props.order['__dataID__']}', <span className='purple'>node: Object {'}'} </span>
        
        </span>
        <div className='display-offset purple'>
          node {'{'} __dataID__: '{this.props.order.node['__dataID__']}',
          id: '{this.props.order.node.id}',
          food_truck_id: {this.props.order.node.food_truck_id}, tasty_item: '{this.props.order.node.tasty_item}' {'}'} 
          <span className='pointer delete' onClick={this.deleteOrder}> X</span>
        </div>
      </div>
    )
  }
})
