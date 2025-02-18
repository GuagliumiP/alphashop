import { Component, OnInit } from '@angular/core';

// Definizione del componente Angular per la pagina di login
@Component({
  selector: 'app-login', // Nome del selettore HTML per questo componente
  templateUrl: './login.component.html', // Percorso del file HTML associato
  styleUrls: ['./login.component.css'] // Percorso del file CSS associato
})
export class LoginComponent implements OnInit {

  // Dichiarazione delle proprietà per l'ID utente e la password
  userId: string = "Marco" ; // Valore predefinito per l'ID utente
  password: string=""; // Campo per la password, inizialmente vuoto

  // Costruttore del componente
  constructor() {}

  // Metodo chiamato quando il componente viene inizializzato
  ngOnInit(): void {
    // Attualmente non esegue alcuna operazione
  }

  // Metodo per gestire l'autenticazione, senza parametri e che restituisce un voic
  gestAuth = (): void => {
    console.log("La chiave utente è" + this.userId); // Stampa l'ID utente nella console
    console.log(`La tua username è: ${this.userId} La tua password è: ${this.password}`);
  }
}
