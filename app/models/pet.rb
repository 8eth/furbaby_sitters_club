class Pet < ApplicationRecord
  belongs_to :client

  # validates :name, :species, presence: true
end
