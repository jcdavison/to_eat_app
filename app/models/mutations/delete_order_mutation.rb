DeleteOrderMutation = GraphQL::Relay::Mutation.define do
  name "DeleteOrder"
  description "delete an order"

  input_field :order_id, !types.ID

  return_field :food_truck, FoodTruckType

  resolve lambda { |inputs, context|
    order = Order.find(inputs[:order_id])
    food_truck = order.food_truck
    order.destroy
    { food_truck: food_truck }
  }
end
