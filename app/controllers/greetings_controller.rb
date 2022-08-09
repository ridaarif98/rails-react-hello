class GreetingsController < ActionController::Base
    def index
        @greetings = Greeting.all.sample
        render json: @greetings
    end
end