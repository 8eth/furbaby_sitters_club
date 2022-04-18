Rails.application.routes.draw do
  
  resources :pets
  resources :appointments
  resources :sitters
  resources :clients

  post "/signup", to: "clients#create"
  get "/me", to: "clients#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
