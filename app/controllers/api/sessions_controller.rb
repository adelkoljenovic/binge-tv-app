class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(email_address: params[:email_address])
    if user && user.authenticate(params[:password])
      jwt = JWT.encode(
        {
          user: user.id, # the data to encode
          exp: 24.hours.from_now.to_i # the expiration time
        },
        Rails.application.credentials.fetch(:secret_key_base), # the secret key
        'HS256' # the encryption algorithm
      )
      render json: {jwt: jwt, email: user.email_address}, status: :created
    else
      render json: {}
    end
  end
end
