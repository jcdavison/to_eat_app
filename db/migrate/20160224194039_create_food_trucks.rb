class CreateFoodTrucks < ActiveRecord::Migration
  def change
    create_table :food_trucks do |t|
      t.string :name
      t.string :home_town

      t.timestamps null: false
    end
  end
end
