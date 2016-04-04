FleetType = GraphQL::ObjectType.define do
  name "Fleet"
  description "food truck who?"

  interfaces [NodeInterface.interface]
  global_id_field :id

  field :id, !types.ID
  field :name, !types.String
  connection :food_trucks, FoodTruckType.connection_type do
    resolve -> (obj, args, context) { obj.food_trucks }
  end
end
