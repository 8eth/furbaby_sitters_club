class Client < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :sitters, through: :appointments
    has_many :pets, dependent: :destroy
end
