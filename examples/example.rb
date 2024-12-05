require 'net/http'
require 'uri'
require 'json'

api_endpoint = 'https://autotopup.gliders.dev/order/create'
api_key = 'YOUR_API_KEY'

order_data = {
  uid: 2015215941,
  order_type: 'BD_TOPUP',
  package: 'weekly',
  callback_url: 'https://your-callback-url.com',
  callback_key: 'YourCallbackKey'
}

uri = URI.parse(api_endpoint)
request = Net::HTTP::Post.new(uri)
request.content_type = 'application/json'
request['Authorization'] = "Bearer #{api_key}"
request.body = JSON.dump(order_data)

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
  http.request(request)
end

if response.code.to_i == 200
  puts 'Order submitted successfully!'
  puts 'Response: ' + response.body
else
  puts 'Failed to submit order.'
  puts 'Status Code: ' + response.code
  puts 'Response: ' + response.body
end