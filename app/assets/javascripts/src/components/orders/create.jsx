import React from 'react'
import Relay from 'react-relay'

export default React.createClass({

  getInitialState() {
    return ({  
      foodTrucks: [],
      foodTruckId: null,
      tastyItem: null,
      displayState: ''
    })
  },

  componentDidMount() {
    this.setState({foodTrucks: this.props.foodTrucks})
    this.setVisibility(this.props.foodTrucks)
  },

  setVisibility(foodTrucks) {
    if (foodTrucks.length == 0) {
      this.setState({displayState: 'hidden'})
    } else { this.setState({displayState: ''}) }
  },

  componentWillReceiveProps(args) {
    if (args.foodTrucks.length > 0) {
      let firstFoodTruckId = args.foodTrucks[0].node.id
      this.setState({foodTrucks: args.foodTrucks, foodTruckId: firstFoodTruckId })
    }
    this.setVisibility(args.foodTrucks)
  },

  updateValue(attrName, e) {
    let attrObj = {}
    attrObj[attrName] = e.target.value
    this.setState(attrObj)
  },

  trucksAsOptions(foodTrucks) {
    return foodTrucks.map((foodTruck, index) => {
      let selected = null
      return <option value={foodTruck.node.id} key={'truck-option' + index} >{foodTruck.node.name}</option>
    })
  },

  orderInfo() {
    return { food_truck_id: this.state.foodTruckId, tasty_item: this.state.tastyItem }
  },

  submitSelf(e) {
    e.preventDefault()
    this.props.createOrder(this.orderInfo(), e.target)
  },

  render() {
    return (
      <div className={'padded top-margined ' + this.state.displayState }>
        <div className='blue medium-small'>Submit an Order</div>

        <div className='order-create'>
          <form className='form-inline' onSubmit={this.submitSelf}>
            <div className="form-group">
              <label>Food Truck</label>
              <select className="form-control" onChange={this.updateValue.bind(this, 'foodTruckId')} value={this.state.foodTruckId}>
                {this.trucksAsOptions(this.state.foodTrucks)}
              </select>
            </div>
            <div className="form-group">
              <label>Order</label>
              <input type="text" className="form-control" id="name" required placeholder="panko n brownies" onChange={this.updateValue.bind(this, 'tastyItem')} />
            </div>
            <button type="submit" className="btn btn-default">create order</button>
          </form>
        </div>
      </div>
    )
  }
})
