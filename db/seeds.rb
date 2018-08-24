# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


 # t.string "first_name"
 #    t.string "last_name"
 #    t.string "gender"
 #    t.string "date_of_birth"
 #    t.string "email_address"
 #    t.string "password_digest"
 #    t.string "leader"

# gender = ["male", "female"]

# 50.times do |i|
#   puts "creating user #{i}"
#   User.create!(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     gender: gender.sample,
#     date_of_birth: Faker::Date.birthday(18, 65),
#     email_address: Faker::Internet.email,
#     password_digest: "password",
#     leader: false
#     )
# end

# create_table "group_users", force: :cascade do |t|
#     t.integer "group_id"
#     t.integer "user_id"
user_array = (1..52).to_a
group_array = [1, 2, 3]

100.times do
  GroupUser.create(
    group_id: group_array.sample,
    user_id: user_array.sample
  )
end
 
 
 