import axios from 'axios';

const apiEndpoint = 'https://autotopup.gliders.dev/order/create';
const apiKey = 'YOUR_API_KEY';

const orderData = {
    uid: 2015215941,
    order_type: 'BD_TOPUP',
    package: 'weekly',
    callback_url: 'https://your-callback-url.com',
    callback_key: 'YourCallbackKey'
};

axios.post(apiEndpoint, orderData, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(response => {
    console.log('Order submitted successfully!');
    console.log('Response:', response.data);
})
.catch(error => {
    console.log('Failed to submit order.');
    console.log('Error:', error.response ? error.response.data : error.message);
});