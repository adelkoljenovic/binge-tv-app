class TeleSelection < ApplicationRecord
  has_many :events
  belongs_to :user
end
