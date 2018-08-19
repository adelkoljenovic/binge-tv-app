class Api::LocationsController < ApplicationController
  def create
    @location = Location.new(
      street_address: params[:street_address],
      city: params[:city],
      state: params[:state],
      zip_code: params[:zip_code],
      user_id: current_user.id
    )
    if @location.save
      render "show.json.jbuilder"
    else
      render json: {errors: @location.errors.full_messages}, status: :unprocessable_entity
    end
  end
end

  # create_table "locations", force: :cascade do |t|
  #   t.string "street_address"
  #   t.string "city"
  #   t.string "state"
  #   t.integer "zip_code"
  #   t.integer "user_id"
