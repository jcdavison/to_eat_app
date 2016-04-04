RootMutationType = GraphQL::ObjectType.define do
  name "RootMutation"
  description "root mutation"

  field :create_food_truck, field: CreateFoodTruckMutation.field
  field :create_order, field: CreateOrderMutation.field
  field :delete_food_truck, field: DeleteFoodTruckMutation.field
  field :delete_order, field: DeleteOrderMutation.field
end
