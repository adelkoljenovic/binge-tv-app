Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
  namespace :api do
    get "/catalogues" => "catalogues#index"


    # Signup (create a new user)
    post "/users" => "users#create"
  end
end
