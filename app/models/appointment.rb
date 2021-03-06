class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :sitter

  validates :appt_start, :appt_end, uniqueness: true
end
