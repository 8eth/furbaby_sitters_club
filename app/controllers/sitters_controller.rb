class SittersController < ApplicationController
    before_action :find_sitter, only: [:show, :update, :destroy]

    def index
        render json: Sitter.all
    end

    def show
        render json: @sitter
    end

    def create
        sitter = Sitter.create!(sitter_params)
        render json: sitter, status: :created
    end

    def update
        @sitter.update!(sitter_params)
        render json: @sitter, status: :accepted
    end

    def destroy
        @sitter.destroy 
        head :no_content
    end

    private

    def find_sitter
        @sitter = Sitter.find(params[:id])
    end

    def sitter_params
        params.permit(:name, :image, :phone_number, :email, :bio, :availability)
    end
end
