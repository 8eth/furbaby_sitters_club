class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname, :image, :address, :number, :admin

end
