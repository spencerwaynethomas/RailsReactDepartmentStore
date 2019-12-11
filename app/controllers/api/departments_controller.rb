class Api::DepartmentsController < ApplicationController
  def index
    render json: Department.all
  end

  def show
    render json: @department
  end

  def create
    department = department.new(product_params)

    if department.save
      render json: department
    else
      render json: department.errors, status: 422
    end
  end

  def update
    if @department.update(product_params)
      render json: @department
    else
      render json: @department.errors, status 422
    end
  end

  def destroy
    @department.destroy
  end

  private

  def set_department
    @department = Department.find(params[:id])
  end

  def department_params
    params.require(:department).permit(:name)
  end

end
