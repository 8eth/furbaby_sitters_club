class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :meds, :fears, :likes, :image
end
