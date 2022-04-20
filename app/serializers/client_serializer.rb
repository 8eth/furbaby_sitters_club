class ClientSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :image, :address, :number
end
