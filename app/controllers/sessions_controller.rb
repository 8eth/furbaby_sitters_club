class SessionsController < ApplicationController

    skip_before_action :authorize, only: :login
  
    def login
      user = Client.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:client_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def logout
      if session[:client_id] != nil
        session.delete :client_id
        head :no_content
      else
        render json: { errors: "Not Authorized"}, status: :unauthorized
      end
    end
  
end
