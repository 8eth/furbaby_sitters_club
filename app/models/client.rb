class Client < ApplicationRecord
    has_secure_password
    has_many :appointments, dependent: :destroy
    has_many :sitters, through: :appointments
    has_many :pets, dependent: :destroy

    validates :fullname, :address, :number, :username, :password, presence: true
    validates :fullname, :username, uniqueness: true
end
