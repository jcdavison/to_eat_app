require 'rails_helper'

RSpec.describe FoodTruck, type: :model do
  before :each do
    @bacon_bacon = FoodTruck.new name: 'bacon bacon', hometown: 'the city'
  end

  it 'has a name and hometown' do
    expect(@bacon_bacon.valid?).to eq true
  end

  it 'has a unique name' do
    @bacon_bacon.save
    bacon_bacon_ripoff = FoodTruck.new name: 'bacon bacon', hometown: 'the sunset'
    bacon_bacon_ripoff.valid?
    expect(bacon_bacon_ripoff.errors[:name].any? {|e| e.match /taken/ } ).to eq true
  end
end
