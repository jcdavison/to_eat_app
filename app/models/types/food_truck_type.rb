FoodTruckType = GraphQL::ObjectType.define do
  name "FoodTruck"
  description "food truck"

  interfaces [NodeInterface.interface]
  global_id_field :id

  field :id, !types.ID
  field :name, !types.String
  field :home_town, !types.String
  field :fleet_id, !types.ID

  connection :orders, OrderType.connection_type do
    resolve -> (obj, args, context) { obj.orders }
  end
end
