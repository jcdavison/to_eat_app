CreateFoodTruckMutation = GraphQL::Relay::Mutation.define do
  name "CreateFoodTruck"
  description "Creates a new truck"

  input_field :name, !types.String
  input_field :home_town, !types.String

  return_field :food_truck, FoodTruckType
  return_field :fleet, FleetType

  resolve lambda { |inputs, context|
    food_truck = FoodTruck.new name: inputs[:name], home_town: inputs[:home_town], fleet_id: Fleet.first.id
    food_truck.save
    { food_truck: food_truck , fleet: Fleet.first}
  }
end
