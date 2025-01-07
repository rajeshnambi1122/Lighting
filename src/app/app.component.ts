import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lighting';
  constructor(private http: HttpClient) {}

  sendMessage(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post(
        'https://script.google.com/macros/s/AKfycbwdlb68CflYpqt5K11BuS8udHJ-ORVmX9Hg0XWwMuaiZgo_IBHCNCTksANTgtMrBvk/exec',
        data,
        { headers }
      )
      .subscribe(
        (response) => {
          console.log('Success:', response);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
