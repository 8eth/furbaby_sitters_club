class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname, :image, :address, :number, :admin

  # has_many :pets
end
