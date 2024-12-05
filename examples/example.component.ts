import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  private apiEndpoint = 'https://autotopup.gliders.dev/order/create';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  submitOrder() {
    const orderData = {
      uid: 2015215941,
      order_type: 'BD_TOPUP',
      package: 'weekly',
      callback_url: 'https://your-callback-url.com',
      callback_key: 'YourCallbackKey'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    this.http.post(this.apiEndpoint, orderData, { headers })
      .subscribe(
        response => {
          console.log('Order submitted successfully!');
          console.log('Response:', response);
        },
        error => {
          console.error('Failed to submit order:', error);
        }
      );
  }
}