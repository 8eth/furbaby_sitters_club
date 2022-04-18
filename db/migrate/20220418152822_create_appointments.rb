class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.datetime :datetime # for better format use => t.string :datetime
      t.string :petcare
      t.references :client, null: false, foreign_key: true
      t.references :sitter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
