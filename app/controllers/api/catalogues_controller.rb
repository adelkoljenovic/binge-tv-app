class Api::CataloguesController < ApplicationController

  def index
    @catalogue = Unirest.get(
      "https://api.thetvdb.com/episodes/74543",
      headers: {
        'X-User-Email' => ENV['API_EMAIL'], 
        'Authorization' => "Token token=#{ENV['API_KEY']}"
      }
    ).body
    render "index.json.jbuilder"
  end

end
