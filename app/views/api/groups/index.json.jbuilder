json.array! @groups.each do |group|
  json.id group.id
  json.name group.name
  json.users group.group_users
  json.users group.users
end

