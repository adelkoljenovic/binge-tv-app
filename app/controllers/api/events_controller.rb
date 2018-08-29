class Api::EventsController < ApplicationController
  def create
    @events = Event.new(
      group_id: params[:id],
      tele_selection_id: 
      user_id: current_user.id
      ) 
    @events.save!
    render "show.json.jbuilder" 
  end
end
