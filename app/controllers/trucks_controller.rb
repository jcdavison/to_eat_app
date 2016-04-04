class TrucksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def home
    if FoodTruck.count == 0 || params[:reset_data] == 'true'
      Fleet.build
    end
  end

  def graphql
    query = GraphqlSchema.execute(params[:query], variables: params[:variables])
    render json: query
  end
end
