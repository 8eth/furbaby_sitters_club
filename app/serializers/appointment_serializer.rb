class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appt_start, :appt_end, :petcare, :title
  has_one :sitter
end
