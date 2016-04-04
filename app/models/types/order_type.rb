OrderType = GraphQL::ObjectType.define do
  name "Order"
  description "tasty foods"

  interfaces [NodeInterface.interface]
  global_id_field :id

  field :id, !types.ID
  field :tasty_item, !types.String
  field :food_truck_id, !types.ID
end
