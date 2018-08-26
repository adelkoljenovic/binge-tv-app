class Api::GroupsController < ApplicationController
  def index
    @groups = Group.all
    render "index.json.jbuilder"
  end

  def create
    @group = Group.new(
      name: params[:name]
      ) 
    @group.save!
    render "show.json.jbuilder" 
  end
end
