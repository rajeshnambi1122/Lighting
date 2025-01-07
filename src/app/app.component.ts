import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lighting';

  sendMessage(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    fetch(
      'https://script.google.com/macros/s/AKfycbwTdmFWDmEg8npHLbnwFKaVhrG_Qw-m6WXxTFcBHevKHToTh1lzmV2symdlSjgYa4gE/exec',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Optionally, show a success message to the user
      })
      .catch((error) => {
        console.error('Error:', error);
        // Optionally, show an error message to the user
      });
  }
}
