json.array! @dt_time_selections.each do |dt_time_selection|
  json.id dt_time_selection.id
  json.date dt_time_selection.date
  json.time dt_time_selection.time
end
