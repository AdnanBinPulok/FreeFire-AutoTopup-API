import requests

# Define the API endpoint and your API key
api_endpoint = "https://autotopup.gliders.dev/order/create"
api_key = "YOUR_API_KEY"

# Define the order details
order_data = {
    "uid": 2015215941,
    "order_type": "BD_TOPUP",
    "package": "weekly",
    "callback_url": "https://your-callback-url.com",
    "callback_key": "YourCallbackKey",
}

# Set the headers
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

# Send the POST request
response = requests.post(api_endpoint, json=order_data, headers=headers)

# Check the response
if response.status_code == 200:
    print("Order submitted successfully!")
    print("Response:", response.json())
else:
    print("Failed to submit order.")
    print("Status Code:", response.status_code)
    print("Response:", response.text)