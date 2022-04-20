class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appt_start, :appt_end, :petcare
  # has_one :client
  # has_one :sitter
end
