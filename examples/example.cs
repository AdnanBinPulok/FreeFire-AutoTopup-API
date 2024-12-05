using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string apiEndpoint = "https://autotopup.gliders.dev/order/create";
        string apiKey = "YOUR_API_KEY";

        var orderData = new
        {
            uid = 2015215941,
            order_type = "BD_TOPUP",
            package = "weekly",
            callback_url = "https://your-callback-url.com",
            callback_key = "YourCallbackKey"
        };

        using (var client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            var content = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(orderData), Encoding.UTF8, "application/json");

            var response = await client.PostAsync(apiEndpoint, content);
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine("Order submitted successfully!");
                var responseData = await response.Content.ReadAsStringAsync();
                Console.WriteLine("Response: " + responseData);
            }
            else
            {
                Console.WriteLine("Failed to submit order.");
                Console.WriteLine("Status Code: " + response.StatusCode);
                var responseData = await response.Content.ReadAsStringAsync();
                Console.WriteLine("Response: " + responseData);
            }
        }
    }
}