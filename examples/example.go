package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    apiEndpoint := "https://autotopup.gliders.dev/order/create"
    apiKey := "YOUR_API_KEY"

    orderData := map[string]interface{}{
        "uid":          2015215941,
        "order_type":   "BD_TOPUP",
        "package":      "weekly",
        "callback_url": "https://your-callback-url.com",
        "callback_key": "YourCallbackKey",
    }

    jsonData, err := json.Marshal(orderData)
    if err != nil {
        fmt.Println("Error marshaling JSON:", err)
        return
    }

    req, err := http.NewRequest("POST", apiEndpoint, bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }

    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+apiKey)

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error sending request:", err)
        return
    }
    defer resp.Body.Close()

    if resp.StatusCode == http.StatusOK {
        fmt.Println("Order submitted successfully!")
    } else {
        fmt.Println("Failed to submit order. Status Code:", resp.StatusCode)
    }
}