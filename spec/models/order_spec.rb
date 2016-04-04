require 'rails_helper'

RSpec.describe Order, type: :model do
  before do
    @order = Order.new food_truck_id: 1, tasty_item: 'brisket fries'
  end

  it 'requires #food_truck_id, #tasty_item' do
    expect(@order.valid?).to eq true
    @order.tasty_item = nil
    expect(@order.valid?).to eq false
  end
end
