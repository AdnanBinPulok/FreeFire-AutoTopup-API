import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        try {
            String apiEndpoint = "https://autotopup.gliders.dev/order/create";
            String apiKey = "YOUR_API_KEY";

            String orderData = "{"
                    + "\"uid\": 2015215941,"
                    + "\"order_type\": \"BD_TOPUP\","
                    + "\"package\": \"weekly\","
                    + "\"callback_url\": \"https://your-callback-url.com\","
                    + "\"callback_key\": \"YourCallbackKey\""
                    + "}";

            URL url = new URL(apiEndpoint);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + apiKey);
            conn.setDoOutput(true);

            try (OutputStream os = conn.getOutputStream()) {
                byte[] input = orderData.getBytes(StandardCharsets.UTF_8);
                os.write(input, 0, input.length);
            }

            int responseCode = conn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                System.out.println("Order submitted successfully!");
            } else {
                System.out.println("Failed to submit order. Response Code: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}