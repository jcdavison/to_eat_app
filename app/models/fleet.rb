class Fleet < ActiveRecord::Base
  validates_presence_of :name
  has_many :food_trucks

  def self.build
    fleet = self.first_or_create(name: 'hipsters with waffles')
    FoodTruck.destroy_all
    Order.destroy_all
    fleet_data.each do |truck|
      FoodTruck.create name: truck[:name], home_town: truck[:home_town], fleet_id: fleet.id
      3.times do |n|
        FoodTruck.last.orders << Order.create(tasty_item: "#{n + 1} #{truck[:item]}") 
      end
    end
  end

  def self.fleet_data 
    [ {name: 'bacon bacon', home_town: 'the city', item: 'bacon burger'},
      {name: 'taco guys', home_town: 'SoMa', item: 'shrimp tacos'},
      {name: 'the chairman', home_town: 'the loin', item: 'bao'},
      {name: 'fins on the hoof', home_town: 'Frisco', item: 'hoof sammy'} ]
  end

end
