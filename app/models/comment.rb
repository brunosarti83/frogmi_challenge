class Comment < ApplicationRecord
  belongs_to :feature

  validates :body, presence: true
  validates :body, length: { minimum: 1, maximum: 300 }
end
