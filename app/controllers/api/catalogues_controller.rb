class Api::CataloguesController < ApplicationController

  def index
    @catalogue = Unirest.get(
      "https://api.themoviedb.org/3/search/tv?api_key=b39b98211eb994f777ceb21b1588fb22&language=en-US&query=#{params[:name]}",
      headers: {
        'X-User-Email' => ENV['API_EMAIL'], 
        'Authorization' => "Token token=#{ENV['API_KEY']}"
      }
    ).body

    render "index.json.jbuilder"

  end

end


