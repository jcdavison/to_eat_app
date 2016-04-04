NodeInterface = GraphQL::Relay::GlobalNodeIdentification.define do
  object_from_id lambda { |id, context|
    type_name, id = NodeInterface.from_global_id(id)
    Object.const_get(type_name).find(id)
  }

  type_from_object lambda { |object|
    Queries.const_get("#{object.class.name}Type")
  }
end
