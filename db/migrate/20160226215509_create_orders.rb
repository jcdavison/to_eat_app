class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :tasty_item
      t.integer :food_truck_id

      t.timestamps null: false
    end
  end
end
