class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :meds
      t.string :fears
      t.string :likes
      t.string :image
      t.references :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
