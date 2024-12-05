# FreeFire TopUp API 🚀

## Table of Contents 📑

1. [Introduction](#introduction)
2. [Features](#features)
3. [Pre-Requisites](#pre-requisites)
4. [How to Use](#how-to-use)
5. [How It Works](#how-it-works)
6. [Example Request](#example-request)
7. [Video Demonstration](#video-demonstration)
8. [Documentation](#documentation)
9. [Support](#support)

## Introduction

The FreeFire TopUp API allows developers to integrate FreeFire UID recharge functionality into their applications. This API supports fast and reliable top-ups for FreeFire accounts, making it the best choice for developers looking to implement Garena Shell TopUp Integration.

## Features ✨

- ⚡ Fast FreeFire UID Recharge
- 📦 Supports multiple top-up packages
- 🔒 Secure and reliable transactions
- 📄 Easy integration with clear documentation
- 🏆 Best FreeFire API for Developers

## Pre-Requisites 🛠️

Before using the FreeFire TopUp API, ensure you have the following:

- 🔑 API Key: Obtain your API key from the developer portal.

## How to Use 📋

To use the FreeFire TopUp API, follow these steps:

1. **Acquire API Key**: Obtain your API key from the developer portal.
2. **Add Stock**: Ensure you have sufficient stock in your account.
3. **Top-Up**: Use the API to perform top-ups.

## How It Works ⚙️

The FreeFire TopUp API works by allowing developers to send top-up requests to FreeFire accounts. The API processes the request and returns a response indicating the success or failure of the transaction. Developers can also set up a callback URL to receive real-time updates on the transaction status.

# Orders Types 📦

```
BD_TOPUP # Bangladesh UID TopUp
BD_AIRDROP # Bangladesh UID Airdrop
ID_TOPUP # Indonesia UID TopUp
```

## Example Request 📬

Here is an example of how to make a top-up request using the FreeFire TopUp API:

```http

POST /order/create HTTP/1.1
Host: autotopup.gliders.dev
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "uid": 2015215941,
  "order_type": "BD_TOPUP",
  "package": "weekly",
  "callback_url": "YOUR_CALLBACK_URL",
  "callback_key": "YOUR_CALLBACK_KEY"
}
```

## Callback Example 📩

```json
{
  "id": 194,
  "status": "completed",
  "order_type": "BD_TOPUP",
  "error_code": null,
  "error_message": null,
  "uid": 6057364290,
  "packages": [
    {
      "name": "2530 Diamond",
      "amount": 1625
    },
    {
      "name": "2530 Diamond",
      "amount": 1625
    }
  ],
  "sequence": {
    "browser_opened": true,
    "shop_page_loaded": true,
    "shop_page_url": "https://shop.garena.my/?app=100067",
    "logged_in": true,
    "captcha_blocked": false,
    "username": "CaN^I^Kil™U√"
  },
  "topupsequence": {
    "0": {
      "unipin_page_url": "https://www.unipin.com/unibox/select_denom/fO6B1733408592Re2Wnp3jptuw?lg=en",
      "payment_url": "https://www.unipin.com/unibox/c/fO6B1733408592Re2Wnp3jptuw/670",
      "confirmation_clicked": true,
      "pin_amount": 1625,
      "code": "UPBD-J-S-00331917 8753-5473-2661-1676",
      "payment_completed": true,
      "payment_proof_url": "https://storage.gliders.dev/file/view/others/65a56bc3-2bab-4e46-bbe6-667a76085c50.png"
    },
    "1": {
      "unipin_page_url": "https://www.unipin.com/unibox/select_denom/gu2i1733408602W5Wrae4ovPiv?lg=en",
      "payment_url": "https://www.unipin.com/unibox/c/gu2i1733408602W5Wrae4ovPiv/670",
      "confirmation_clicked": true,
      "pin_amount": 1625,
      "code": "UPBD-J-S-00332300 3696-9453-5441-1243",
      "payment_completed": true,
      "payment_proof_url": "https://storage.gliders.dev/file/view/others/8cd7973e-7950-49a2-8271-79f76d19aa6c.png"
    }
  },
  "stocks": [
    {
      "id": 241297,
      "code": "UPBD-J-S-00331917 8753-5473-2661-1676",
      "created_at": "2024-12-05T12:36:37.109176+00:00",
      "pin_amount": 1625,
      "claimed": true
    },
    {
      "id": 241298,
      "code": "UPBD-J-S-00332300 3696-9453-5441-1243",
      "pin_amount": 1625,
      "claimed": true
    }
  ],
  "account": {}
}
```

## Video Demonstration 🎥

Watch the video below to see the FreeFire TopUp API in action:

[![Example Video](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Documentation 📚

For detailed API documentation, visit:

- [API Docs](https://autotopup.gliders.dev/docs)
- [Redoc](https://autotopup.gliders.dev/redoc)

## Support 🤝

For any questions or support, please contact our support team at [adnanbinpulok@gmail.com](mailto:adnanbinpulok@gmail.com).

To contact me directly, email [adnanbinpulok@gmail.com](mailto:adnanbinpulok@gmail.com).

---

This README.md provides a comprehensive guide to using the FreeFire TopUp API, ensuring developers can quickly and easily integrate FreeFire UID recharge functionality into their applications. The document is optimized for search engines with relevant keywords, making it easy to find for those looking for the best FreeFire API for developers.
