json.array! @food_bev_selections.each do |food_bev_selection|
  json.id food_bev_selection.id
  json.item food_bev_selection.item
end