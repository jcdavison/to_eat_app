Rails.application.routes.draw do
  root to: "trucks#home"
  post "/graphql" => "trucks#graphql"
end
