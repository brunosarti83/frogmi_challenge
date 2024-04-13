class FeaturesController < ApplicationController
  before_action :set_feature, only: %i[ show update destroy ]
  before_action :validate_per_page, only: %i[ index ]

  # GET /features
  def index
    per_page = params[:per_page] || 15
    page = params[:page] || 1

    if params[:mag_type].present?
      mag_types = params[:mag_type].split(",")
      @filtered = Feature.where(mag_type: mag_types)
    else
      @filtered = Feature.all
    end

    offset = (page.to_i - 1) * per_page.to_i
    total_count = @filtered.count
    
    @features = @filtered.limit(per_page).offset(offset)

    render json: {
      data: ActiveModel::Serializer::CollectionSerializer.new(@features, each_serializer: FeatureSerializer),
      pagination: {
        current_page: page.to_i,
        total: total_count,
        per_page: per_page.to_i
      }
    }
  end

  # GET /features/1
  def show
    render json: @feature
  end

  # POST /features
  def create
    @feature = Feature.new(feature_params)

    if @feature.save
      render json: @feature, status: :created, location: @feature
    else
      render json: @feature.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /features/1
  def update
    if @feature.update(feature_params)
      render json: @feature
    else
      render json: @feature.errors, status: :unprocessable_entity
    end
  end

  # DELETE /features/1
  def destroy
    @feature.destroy!
  end

  private

    def validate_per_page
      if params[:per_page].present? 
        unless params[:per_page].to_i <= 1000
          render json: { error: "per_page should not exceed 1000" }, status: :unprocessable_entity
        end
      end
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_feature
      @feature = Feature.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def feature_params
      params.require(:feature).permit(:external_id, :magnitude, :place, :time, :tsunami, :mag_type, :title, :longitude, :latitude, :external_url)
    end
end
