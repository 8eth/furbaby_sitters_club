class Client < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :sitters, through: :appointments
    has_many :pets, dependent: :destroy

    validates :full_name, :address, :phone_number, presence: true
    validates :full_name, uniqueness: true
end
