[ {name: 'bacon bacon', home_town: 'the city'},
  {name: 'taco guys', home_town: 'SoMa'},
  {name: 'the chairman', home_town: 'the loin'},
  {name: 'fins on the hoof', home_town: 'Frisco'} ].each do |truck|
  FoodTruck.create name: truck[:name], home_town: truck[:home_town]
end
