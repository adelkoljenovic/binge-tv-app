class Event < ApplicationRecord
  belongs_to :food_bev_selection
  belongs_to :location
  belongs_to :tele_selection
end
