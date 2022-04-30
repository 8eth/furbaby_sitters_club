# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_27_091127) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "title"
    t.date "appt_start"
    t.date "appt_end"
    t.string "petcare"
    t.bigint "client_id", null: false
    t.bigint "sitter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_appointments_on_client_id"
    t.index ["sitter_id"], name: "index_appointments_on_sitter_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "fullname"
    t.string "image"
    t.string "address"
    t.string "number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin", default: false
  end

  create_table "details", force: :cascade do |t|
    t.string "details"
    t.string "image"
    t.bigint "dream_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dream_id"], name: "index_details_on_dream_id"
  end

  create_table "dreams", force: :cascade do |t|
    t.string "dream"
    t.string "category"
    t.boolean "status", default: false
    t.date "due"
    t.bigint "list_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["list_id"], name: "index_dreams_on_list_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "memories", force: :cascade do |t|
    t.string "title"
    t.string "desc"
    t.string "img_one"
    t.string "img_two"
    t.string "img_three"
    t.integer "rating"
    t.bigint "user_id", null: false
    t.bigint "dream_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dream_id"], name: "index_memories_on_dream_id"
    t.index ["user_id"], name: "index_memories_on_user_id"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.string "species"
    t.string "meds"
    t.string "fears"
    t.string "likes"
    t.string "image"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_pets_on_client_id"
  end

  create_table "sitters", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "phone_number"
    t.string "email"
    t.string "bio"
    t.boolean "availability"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "name"
    t.string "image"
    t.string "bio"
    t.boolean "admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appointments", "clients"
  add_foreign_key "appointments", "sitters"
  add_foreign_key "details", "dreams"
  add_foreign_key "dreams", "lists"
  add_foreign_key "lists", "users"
  add_foreign_key "memories", "dreams"
  add_foreign_key "memories", "users"
  add_foreign_key "pets", "clients"
end
