class FeatureSerializer < ActiveModel::Serializer
  attribute :id
  attribute :type
  attribute :feature_attributes, key: :attributes
  attribute :feature_links, key: :links
  has_many :comments do 
    object.comments.order(id: :desc)
  end

  def type
    'feature'
  end

  def feature_attributes
    {
      external_id: object.external_id,
      magnitude: object.magnitude.to_f,
      place: object.place,
      time: object.time,
      tsunami: object.tsunami,
      mag_type: object.mag_type,
      title: object.title,
      coordinates: {
        longitude: object.longitude.to_f,
        latitude: object.latitude.to_f
      }
    }
  end

  def feature_links
    {
      external_url: object.external_url
    }
  end
end

