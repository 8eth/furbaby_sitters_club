puts "Clearing db..."
Appointment.destroy_all
Client.destroy_all
Sitter.destroy_all
Pet.destroy_all

Faker::Time.unique.clear
# Faker::Name.unique.clear
Faker::PhoneNumber.unique.clear
Faker::FunnyName.unique.clear
Faker::Internet.unique.clear

puts "Making clients👤..."
# 10.times {Client.create(full_name: Faker::Name.unique.name, 
# image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['celebrities']), 
# address: Faker::Address.full_address, 
# phone_number: Faker::PhoneNumber.unique.cell_phone)}
Client.create(
    username:'User1', 
    password:'password', 
    fullname:'Mickey Mouse', 
    image: "https://images.pexels.com/photos/10841753/pexels-photo-10841753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    address:'105 Town Square, Main Street, Disneyland, California, 91521',
    number:"877-764-2539")

puts "Making sitters👤..."
Sitter.create(
    name: "Ivy F.",
    image: "https://images.pexels.com/photos/9632404/pexels-photo-9632404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 6), 
    availability: true
)

Sitter.create(
    name: "Circe M.",
    image: "https://images.pexels.com/photos/3224883/pexels-photo-3224883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 7), 
    availability: true
)

Sitter.create(
    name: "Luke S.",
    image: "https://images.pexels.com/photos/159557/leisure-wildlife-photography-pet-photography-dog-159557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 4), 
    availability: true
)

Sitter.create(
    name: "Meg T.",
    image: "https://images.pexels.com/photos/1612846/pexels-photo-1612846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 9), 
    availability: true
)

Sitter.create(
    name: "Alex R.",
    image: "https://images.pexels.com/photos/2403104/pexels-photo-2403104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 5), 
    availability: true
)

# 5.times {Sitter.create(
#     name: Faker::FunnyName.unique.name,
#     image: Faker::LoremFlickr.image(size: "290x348", search_terms: ['people']), 
#     phone_number: Faker::PhoneNumber.unique.cell_phone, 
#     email: Faker::Internet.unique.email, 
#     bio: Faker::Lorem.sentence(word_count: 5), 
#     availability: true)}

puts "Making pets🐶🐱🐰..."
# 20.times {Pet.create(name: Faker::JapaneseMedia::StudioGhibli.character, 
# species: Faker::Creature::Animal.name, 
# meds: Faker::Lorem.sentence(word_count: 7), 
# fears: Faker::Lorem.sentence(word_count: 4), 
# likes: Faker::Lorem.sentence(word_count: 3), 
# # image: "../../client/src/images/pets1.jpg",
# image: Faker::LoremFlickr.image(size: "290x348", search_terms: ['pets']) ,
# client_id: Client.ids.sample)}

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Rhinoceros", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/132400/pexels-photo-132400.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Cat", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Parrot", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/133396/pexels-photo-133396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)    

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Elephant", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/3850526/pexels-photo-3850526.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)        

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Cat", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)    

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)    

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Guinea Pig", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/4383760/pexels-photo-4383760.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)        

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Frog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/674318/pexels-photo-674318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)        

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Camel", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/3015884/pexels-photo-3015884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)            

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Sheep", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/6152108/pexels-photo-6152108.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)            

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Fish", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/3234841/pexels-photo-3234841.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Chameleon", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Cat", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Bunny", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)            

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Monkey", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1670413/pexels-photo-1670413.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Tiger", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::JapaneseMedia::StudioGhibli.character, 
    species: "Chicken", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    


puts "Making appointments🗒..."
20.times {Appointment.create(
    datetime: Faker::Time.unique.forward(days: 23, period: :day, format: :long), 
    petcare: Faker::Lorem.paragraph, 
    client_id: Client.ids.sample,
    sitter_id: Sitter.ids.sample)} 

puts "Done seeding✔️!"