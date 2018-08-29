json.array! @users.each do |user|
  json.user user
  json.usertel user.tele_selections
  json.userdtt user.dt_time_selections
  json.userloc user.locations
  json.userfb user.food_bev_selections
end