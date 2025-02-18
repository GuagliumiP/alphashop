import { Component } from '@angular/core';

@Component({
  selector: 'app-root2', // il selettore riportato in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // dove viene specificato il titolo
  title = 'alphashop';

  // creiamo una nuova variabile saluti
  saluti: string = "Questo è un secondo saluto legato ad una seconda variabile";
  bollini: number = 200;
}
