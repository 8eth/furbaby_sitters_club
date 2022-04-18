class ClientSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :image, :address, :phone_number
end
