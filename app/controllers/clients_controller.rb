class ClientsController < ApplicationController
    
    before_action :find_client, only: [:show, :update, :destroy]
    
    def index
        render json: Client.all
    end

    def show
        render json: @client
    end

    def create
        client = Client.create!(client_params)
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
        params.permit(:full_name, :image, :address, :phone_number)
    end

end
