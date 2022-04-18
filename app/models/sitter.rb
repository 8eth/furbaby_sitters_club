class Sitter < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :clients, through: :appointments

    validates :name, :phone_number, :email, :availability, presence: true
    #validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true

end
