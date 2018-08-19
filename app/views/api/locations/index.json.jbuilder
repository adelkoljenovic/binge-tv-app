json.array! @locations.each do |location|
  json.id location.id
  json.street_address location.street_address
  json.city location.city 
  json.state location.state
  json.zip_code location.zip_code
end
