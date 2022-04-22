class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname, :image, :address, :number

  # has_many :pets
end
