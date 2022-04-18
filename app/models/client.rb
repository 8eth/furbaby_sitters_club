class Client < ApplicationRecord
    has_many :appointments
    has_many :sitters, through: :appointments
    has_many :pets
end
