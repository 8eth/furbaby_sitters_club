class Sitter < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :clients, through: :appointments

    validates :name, :phone_number, :email, :availability, presence: true
end
