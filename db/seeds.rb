puts "Clearing db..."
Appointment.destroy_all
Client.destroy_all
Sitter.destroy_all
Pet.destroy_all

Faker::Appointment.unique.clear
Faker::Client.unique.clear
Faker::Sitter.unique.clear

puts "Making appointments🗒..."
20.times {Appointment.create(datetime: Faker::Time.unique.forward(days: 23,  period: :day, format: :long), 
                            petcare: Faker::Lorem.paragraph, 
                            client: Client.ids.sample,
                            sitter: Sitter.ids.sample)} 

puts "Making clients👤..."
10.times {Client.create (full_name: Faker::Name.unique.name, 
                        image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['celebrities']), 
                        address: Faker::Address.full_address, 
                        phone_number:Faker::PhoneNumber.cell_phone.unique)}

puts "Making pets🐶🐱🐰..."
20.times {Pets.create (name: Faker::JapaneseMedia::StudioGhibli.character, 
                    species:Faker::Creature::Animal.name, 
                    meds: Faker::Lorem.sentence(word_count: 7), 
                    fears: Faker::Lorem.sentence(word_count: 4), 
                    likes: Faker::Lorem.sentence(word_count: 3), 
                    image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['pets']) ,
                    client: Client.ids.sample)}

puts "Making sitters👤..."
5.times {(name: Faker::FunnyName.unique.name, 
        image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['Marvel Characters']), 
        phone_number: Faker::PhoneNumber.cell_phone.unique, 
        email: Faker::Internet.email.unique, 
        bio: Faker::Lorem.sentence(word_count: 5), 
        avaliability: "true")}

puts "Done seeding✔️!"
