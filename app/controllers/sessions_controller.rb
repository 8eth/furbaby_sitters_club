# class SessionsController < ApplicationController

#     skip_before_action :authorize, only: :create
  
#     def create
#       user = Client.find_by(username: params[:username])
#     #   if user&.authenticate(params[:password])
#         session[:client_id] = user.id
#         render json: user
#     #   else
#     #     render json: { errors: ["Invalid username or password"] }, status: :unauthorized
#     #   end
#     end
  
#     def destroy
#       session.delete :client_id
#       head :no_content
#     end
  
# end
