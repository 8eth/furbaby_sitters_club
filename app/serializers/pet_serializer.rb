class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :meds, :fears, :likes, :image
  has_one :client
end
