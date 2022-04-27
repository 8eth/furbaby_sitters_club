 Rails.application.routes.draw do
  
  resources :pets, only: [:index, :show]
  resources :appointments
  resources :sitters, only: [:index, :show]
  resources :clients, except: [:update, :destroy]

  get "/authorize", to: "clients#show"
  post "/signup", to: "clients#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
