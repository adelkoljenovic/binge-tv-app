class Api::FoodBevSelectionsController < ApplicationController
  def index
    @food_bev_selections = FoodBevSelection.all
    render "index.json.jbuilder"
  end

  def create
    @food_bev_selection = FoodBevSelection.new(
      item: params[:item],
      user_id: current_user.id
    )
    if @food_bev_selection.save!
      render "show.json.jbuilder"
    else
      render json: {errors: @food_bev_selection.errors.full_messages}, status: :unprocessable_entity
    end
  end
end
