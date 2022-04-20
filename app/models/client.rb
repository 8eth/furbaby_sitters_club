class Client < ApplicationRecord
    has_secure_password
    has_many :appointments, dependent: :destroy
    has_many :sitters, through: :appointments
    has_many :pets, dependent: :destroy

    validates :full_name, :address, :phone_number, :username, :password, presence: true
    validates :full_name, :username, uniqueness: true
end
