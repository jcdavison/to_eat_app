RootQueryType = GraphQL::ObjectType.define do
  name "RootQuery"
  description "root query"

  field :node, field: NodeInterface.field

  field :user_fleet do
    type UserFleetType
    resolve -> (obj, args, context) { OpenStruct.new(id: 1) }
  end
end
