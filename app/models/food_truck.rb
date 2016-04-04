class FoodTruck < ActiveRecord::Base
  validates_presence_of :name, :home_town, :fleet_id
  validates_uniqueness_of :name
  has_many :orders
  belongs_to :fleet
end
