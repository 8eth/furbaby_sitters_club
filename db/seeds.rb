puts "Clearing db..."
Appointment.destroy_all
Client.destroy_all
Sitter.destroy_all
Pet.destroy_all

puts "Making clients👤..."
Client.create(
    username:'User1', 
    password:'password', 
    fullname:'Mickey Mouse', 
    image: "https://images.pexels.com/photos/9646287/pexels-photo-9646287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    address:'105 Town Square, Main Street, Disneyland, California, 91521',
    number:"877-764-2539",
    admin:true
)

Client.create(
    username:'zoe', 
    password:'pass', 
    fullname:'Zoe Doggo', 
    image: "https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',
    number:"603-413-4124"
)

Client.create(
    username:'Admin', 
    password:'password', 
    fullname:'Administrator', 
    image: "https://images.pexels.com/photos/733658/pexels-photo-733658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    address:'351 Farmington Ave., Hartford, Conn. 06105',
    number:"618-625-8313",
    admin:true
)

Client.create(
    username:'petluver444', 
    password:'password', 
    fullname:'Steve Irwin', 
    image: "https://images.pexels.com/photos/2100047/pexels-photo-2100047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    address:'42 Wallaby Way, Sydney, Austraulia, 2022',
    number:"605-475-6961"
)

Client.create(
    username:'g@dz!lla', 
    password:'password', 
    fullname:'Dr. Doolittle', 
    image: "https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    address:'350 Fifth Avenue, New York City, NY 10118',
    number:"844-435-7387"
)

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
    name: "Charlie P.",
    image: "https://images.pexels.com/photos/4917817/pexels-photo-4917817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 4), 
    availability: true
)

Sitter.create(
    name: "Dakota F.",
    image: "https://images.pexels.com/photos/6002007/pexels-photo-6002007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 5), 
    availability: true
)

Sitter.create(
    name: "Bailey D.",
    image: "https://images.pexels.com/photos/5749807/pexels-photo-5749807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 5), 
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

Sitter.create(
    name: "Lynn K.",
    image: "https://images.pexels.com/photos/9783903/pexels-photo-9783903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 5), 
    availability: true
)

Sitter.create(
    name: "Dana P.",
    image: "https://images.pexels.com/photos/9083446/pexels-photo-9083446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    phone_number: Faker::PhoneNumber.unique.cell_phone, 
    email: Faker::Internet.unique.email, 
    bio: Faker::Lorem.paragraph(sentence_count: 5), 
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

puts "Making pets🐶🐱🐰..."

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Rhinoceros", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/132400/pexels-photo-132400.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Cat", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Parrot", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/133396/pexels-photo-133396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)    

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Elephant", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/3850526/pexels-photo-3850526.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)        

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Cat", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)    

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)    

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Guinea Pig", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/4383760/pexels-photo-4383760.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)        

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Frog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/674318/pexels-photo-674318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)        

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Camel", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/3015884/pexels-photo-3015884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)            

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Sheep", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/6152108/pexels-photo-6152108.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)            

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Fish", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/3234841/pexels-photo-3234841.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Chameleon", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Cat", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Bunny", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Dog", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)            

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Monkey", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1670413/pexels-photo-1670413.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Tiger", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    

Pet.create(
    name: Faker::FunnyName.name, 
    species: "Chicken", 
    meds: Faker::Lorem.sentence(word_count: 7), 
    fears: Faker::Lorem.sentence(word_count: 4), 
    likes: Faker::Lorem.sentence(word_count: 3), 
    image: "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    client_id: Client.ids.sample
)                    


puts "Making appointments🗒..."
Appointment.create(
    title: "GiGi",
    appt_start: "2022-05-05T16:00:00.000Z",
    appt_end: "2022-05-09T09:47:00.000Z",
    petcare: Faker::Lorem.paragraph, 
    client_id: Client.ids.sample,
    sitter_id: Sitter.ids.sample)


Appointment.create(
    title: "Zoe",
    appt_start: "2022-05-01T10:36:00.000Z",
    appt_end: "2022-05-02T16:43:00.000Z",
    petcare: Faker::Lorem.paragraph, 
    client_id: Client.ids.sample,
    sitter_id: Sitter.ids.sample)


Appointment.create(
    title: "Shrinkhead",
    appt_start: "2022-04-24T13:13:00.000Z",
    appt_end: "2022-05-07T09:32:00.000Z",
    petcare: Faker::Lorem.paragraph, 
    client_id: Client.ids.sample,
    sitter_id: Sitter.ids.sample)


Appointment.create(
    title: "Rhino",
    appt_start: "2022-05-04T09:07:00.000Z",
    appt_end:  "2022-05-11T13:32:00.000Z",
    petcare: Faker::Lorem.paragraph, 
    client_id: Client.ids.sample,
    sitter_id: Sitter.ids.sample)





# 20.times {Appointment.create(
#     datetime: Faker::Time.unique.forward(days: 23, period: :day, format: :long), 
#     # appt_start: Faker::Time.unique.forward(days: 23, period: :day, format: :long)
#     # appt_end: Faker::Time.unique.forward(days: 23, period: :day, format: :long)
#     petcare: Faker::Lorem.paragraph, 
#     client_id: Client.ids.sample,
#     sitter_id: Sitter.ids.sample)} 

# Appointment.create(
#     appt_start: "April 23, 2022 12:30",
#     appt_end: "April 30, 2022 12:30",
#     petcare: Faker::Lorem.paragraph, 
#     client_id: Client.ids.sample,
#     sitter_id: Sitter.ids.sample
# )

# Appointment.create(
#     appt_start: "May 5, 2022 16:00",
#     appt_end: "May 9, 2022 9:45",
#     petcare: Faker::Lorem.paragraph, 
#     client_id: Client.ids.sample,
#     sitter_id: Sitter.ids.sample
# )

# Appointment.create(
#     appt_start: "May 1, 2022 10:30",
#     appt_end: "May 2, 2022 16:45",
#     petcare: Faker::Lorem.paragraph, 
#     client_id: Client.ids.sample,
#     sitter_id: Sitter.ids.sample
# )

# Appointment.create(
#     appt_start: "April 24, 2022 13:15",
#     appt_end: "May 7, 2022 9:30",
#     petcare: Faker::Lorem.paragraph, 
#     client_id: Client.ids.sample,
#     sitter_id: Sitter.ids.sample
# )

# Appointment.create(
#     appt_start: "May 4, 2022 9:00",
#     appt_end:  "May 11, 2022 13:30",
#     petcare: Faker::Lorem.paragraph, 
#     client_id: Client.ids.sample,
#     sitter_id: Sitter.ids.sample
# )

puts "Done seeding✔️!"