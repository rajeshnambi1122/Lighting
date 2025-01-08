import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lighting';
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

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
        'https://cors-proxy-rajeshnambis-projects.vercel.app/api/send-message',
        data,
        { headers }
      )
      .subscribe(
        (response) => {
          console.log('Success:', response);
          this.snackBar.open('Message sent successfully!', 'Close', {
            duration: 3000,
          });
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
