class Client < ApplicationRecord
    has_secure_password
    has_many :appointments, dependent: :destroy
    has_many :sitters, through: :appointments
    has_many :pets, dependent: :destroy

    # validates :username, presence: true, uniqueness: true

    # validates :full_name, :address, :phone_number, presence: true
    # validates :full_name, uniqueness: true
end
