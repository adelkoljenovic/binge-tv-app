Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
  namespace :api do
    get "/catalogues" => "catalogues#index"

    get "/groups" => "groups#index"
    post "/groups" => "groups#create"

    post "/group_users" => "group_users#create"

    post "/locations" => "locations#create"


    # Signup, login & logout
    post "/users" => "users#create"
    post "/sessions" => "sessions#create"

  end
end
