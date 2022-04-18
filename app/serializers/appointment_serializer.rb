class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :petcare
  # has_one :client
  # has_one :sitter
end
