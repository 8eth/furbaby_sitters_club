class AppointmentsController < ApplicationController
    
    before_action :find_appointment, only: [:show, :update, :destroy]

    def index 
        render json: Appointment.all
    end

    def show
        render json: @appointment
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        @appointment.update!(appointment_params)
        render json: @appointment, status: :accepted
    end

    def destroy
        @appointment.destroy
        head :no_content
    end

    private

    def appointment_params
        params.permit(:petcare, :client_id, :sitter_id, 
        :appt_start, :appt_end, :title)
    end

    def find_appointment
        @appointment = Appointment.find(params[:id])
    end

end
