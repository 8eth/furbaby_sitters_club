class ApplicationController < ActionController::API

  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid_response

  before_action :authorize

  private

  def authorize
    @current_user = Client.find_by(id: session[:client_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_not_found_response(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def render_not_valid_response(exception) 
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end 

end
