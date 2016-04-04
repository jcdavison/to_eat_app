GraphqlSchema = GraphQL::Schema.new(mutation: RootMutationType, query: RootQueryType)

GraphqlSchema.rescue_from(ActiveRecord::RecordInvalid) do |error|
  error.record.errors.messages.to_json
end
