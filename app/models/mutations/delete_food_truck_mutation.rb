DeleteFoodTruckMutation = GraphQL::Relay::Mutation.define do
  name "DeleteFoodTruck"
  description "delete a truck"

  input_field :food_truck_id, !types.ID

  return_field :fleet, FleetType

  resolve lambda { |inputs, context|
    FoodTruck.find(inputs[:food_truck_id]).destroy
    { fleet: Fleet.first }
  }
end
