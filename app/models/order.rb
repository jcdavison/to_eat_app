class Order < ActiveRecord::Base
  validates_presence_of :food_truck_id, :tasty_item
  belongs_to :food_truck
end
