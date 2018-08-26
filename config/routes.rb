Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
  namespace :api do
    get "/catalogues" => "catalogues#index"

    get "/groups" => "groups#index"
    post "/groups" => "groups#create"

    post "/group_users" => "group_users#create"

    get "/locations" => "locations#index"
    post "/locations" => "locations#create"

    get "/tele_selections" => "tele_selections#index"
    post "/tele_selections" => "tele_selections#create"

    get "food_bev_selections" => "food_bev_selections#index"
    post "food_bev_selections" => "food_bev_selections#create"

    get "dt_time_selections" => "dt_time_selections#index"
    post "dt_time_selections" => "dt_time_selections#create"

    # Signup, login & logout
    post "/users" => "users#create"
    post "/sessions" => "sessions#create"

  end
end
