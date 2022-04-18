class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :sitter

  validates :datetime, uniqueness: true
end
