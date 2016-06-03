import React from 'react'
import Relay from 'react-relay'

export default React.createClass({

  getInitialState() {
    return {  
      name: null,
      home_town: null
    }
  },

  componentDidMount() {
  },

  submitSelf(e) {
    e.preventDefault()
    this.props.createFoodTruck(this.state, e.target)
  },

  updateValue(attrName, e) {
    let attrObj = {}
    attrObj[attrName] = e.target.value
    this.setState(attrObj)
  },

  render() {
    return (
      <div className='padded top-margined'>
        <div className='blue medium-small'>Create A New Truck</div>
        <div className='truck-create'>
          <form className='form-inline' onSubmit={this.submitSelf}>
            <div className="form-group">
              <label>name</label>
              <input type="text" className="form-control" id="name" required placeholder="panko n brownies" onChange={this.updateValue.bind(this, 'name')} />
            </div>
            <div className="form-group">
              <label>hometown</label>
              <input type="text" className="form-control" id="hometown" required placeholder="the mission" onChange={this.updateValue.bind(this, 'home_town')} />
            </div>
            <button type="submit" className="btn btn-default">create truck</button>
          </form>
        </div>
      </div>
    )
  }
})
