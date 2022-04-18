class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :petcare
  # has_one :client
  # has_one :sitter
end
