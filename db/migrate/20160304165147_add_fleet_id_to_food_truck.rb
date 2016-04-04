class AddFleetIdToFoodTruck < ActiveRecord::Migration
  def change
    add_column :food_trucks, :fleet_id, :integer
  end
end
