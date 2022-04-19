class ClientsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    before_action :find_client, only: [:show, :update, :destroy]
    
    def index
        render json: Client.all
    end

    def show
        client_id = Client.find_by(id: session[:client_id])
        render json: client_id
    end

    def create
        client = Client.create!(client_params)
        session[:client_id] = client.id
        render json: client, status: :created
    end

    def update
        client = @client.update!(client_params)
        render json: client, status: :accepted
    end

    def destroy
        @client.destroy
        head :no_content
    end

    private

    def find_client
        @client = Client.find(params[:id])
    end

    def client_params
        params.permit(:username, :password, :password_confirmation, :full_name, :image, :address, :phone_number)
    end

end
