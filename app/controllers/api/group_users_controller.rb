class Api::GroupUsersController < ApplicationController    
  def create
    @group_user = GroupUser.new(
      group_id: params[:id],
      user_id: current_user.id
      ) 
    @group_user.save!
    render "show.json.jbuilder" 
  end
end


