namespace :features do
  desc "clear all features"
  task clear_db: :environment do
    Feature.delete_all
  end

  desc "load features"
  task get_features: :environment do
    require 'httparty'

    url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson' 
    response = HTTParty.get(url)

    if response.success?
      parsed_response = JSON.parse(response.body)
      puts "HTTP GET request was successful!"
      puts "...running..."
      created = 0
      failed = 0
      entries = parsed_response["features"]
      entries.each do |entry|
        begin
          Feature.create!(
            external_id: entry["id"],
            latitude: entry["geometry"]["coordinates"][1], 
            longitude: entry["geometry"]["coordinates"][0], 
            magnitude: entry["properties"]["mag"],
            mag_type: entry["properties"]["magType"],
            tsunami: entry["properties"]["tsunami"],
            place: entry["properties"]["place"],
            time: entry["properties"]["time"],
            title: entry["properties"]["title"],
            external_url: entry["properties"]["url"]
          )
          # puts "Record created successfully!"
          created += 1
        rescue ActiveRecord::RecordInvalid => e
          # puts "Validation failed: #{e.record.errors.full_messages.join(", ")}"
          failed += 1
          next
        end
      end
      puts "Created #{created} records, failed #{failed} records due to validation."
    else
      puts "HTTP GET request failed with status code #{response.code}"
    end
  end

end
