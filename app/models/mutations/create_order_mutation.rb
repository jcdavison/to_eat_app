CreateOrderMutation = GraphQL::Relay::Mutation.define do
  name "CreateOrder"
  description "Creates a new order"

  input_field :tasty_item, !types.String
  input_field :food_truck_id, !types.ID

  return_field :order, OrderType
  return_field :food_truck, FoodTruckType
  return_field :fleet, FleetType

  resolve lambda { |inputs, context|
    order = Order.new tasty_item: inputs[:tasty_item], food_truck_id: inputs[:food_truck_id]
    order.save
    { order: order , food_truck: order.food_truck, fleet: Fleet.new}
  }
end
