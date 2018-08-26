class Api::DtTimeSelectionsController < ApplicationController
  def index
    @dt_time_selections = DtTimeSelection.all
    render "index.json.jbuilder"
  end

  def create
    @dt_time_selection = DtTimeSelection.new(
      date: params[:date],
      time: params[:time],
      user_id: current_user.id
    )
    if @dt_time_selection.save!
      render "show.json.jbuilder"
    else
      render json: {errors: @dt_time_selections.errors.full_messages}, status: :unprocessable_entity
    end
  end
end
