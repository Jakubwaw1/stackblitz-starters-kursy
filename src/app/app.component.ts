import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formularz';
  imieinazwisko: string = '';
  numer: number = 0;
  onSubmit() {
    console.log(this.imieinazwisko);
    if ((this.numer = 1)) {
      console.log('Programowanie w C#');
    } else if ((this.numer = 2)) {
      console.log('Angular dla początkujączych');
    } else if ((this.numer = 3)) {
      console.log('Kurs Django');
    } else {
      console.log('Brak kursu o podanym numerze');
    }
  }
}
