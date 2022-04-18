class PetsController < ApplicationController

    before_action :find_pet, except: [:index, :create]

    def index
        render json: Pet.all
    end

    def create
        pet = Pet.create!(pet_params)
        render json: pet, status: :created
    end

    def show
        render json: @pet
    end

    def update
        pet = @pet
        pet.update!(pet_params)
        render json: pet, status: :accepted
    end

    def destroy
        @pet.destroy
        head :no_content
    end

    private

    def find_pet
        @pet = Pet.find(params[:id])
    end

    def pet_params
        params.permit(:name, :species, :meds, :fears, :likes, :image, :client_id)
    end

end
