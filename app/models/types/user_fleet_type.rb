UserFleetType = GraphQL::ObjectType.define do
  name "UserFleet"
  description "container for user fleets"

  connection :fleets, FleetType.connection_type do
    resolve -> (obj, args, context) {[Fleet.first]}
  end
end
