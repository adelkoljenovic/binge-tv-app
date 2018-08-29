class User < ApplicationRecord
  has_secure_password
  has_many :group_users
  has_many :groups, through: :group_users
  has_many :locations
  has_many :food_bev_selections
  has_many :dt_time_selections
  has_many :tele_selections
end
