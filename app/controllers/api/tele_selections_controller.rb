class Api::TeleSelectionsController < ApplicationController
  def index
    @tele_selections = TeleSelection.all
    render "index.json.jbuilder"
  end

  def create
    @tele_selections = TeleSelection.new(
      title: params[:title],
      user_id: current_user.id
      ) 
    @tele_selections.save!
    render "show.json.jbuilder" 
  end
end
