class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "index.json.jbuilder"
  end


  def create
    @user = User.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      gender: params[:gender],
      date_of_birth: params[:date_of_birth],
      email_address: params[:email_address],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      leader: false
    )
    if @user.save
      render "show.json.jbuilder"
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end
end

# From Schema File for User Model/Table
# create_table "users", force: :cascade do |t|
#     t.string "first_name"
#     t.string "last_name"
#     t.string "gender"
#     t.string "date_of_birth"
#     t.string "email_address"
#     t.string "password_digest"
#     t.string "leader"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
