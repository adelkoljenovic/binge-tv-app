json.array! @tele_selections.each do |tele_selection|
  json.id tele_selection.id
  json.title tele_selection.title
end
