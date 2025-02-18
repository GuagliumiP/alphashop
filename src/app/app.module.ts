// Importazione dei moduli core di Angular necessari per l'applicazione
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importazione del modulo di routing per la gestione della navigazione tra le pagine
import { AppRoutingModule } from './app-routing.module';

// Importazione dei componenti principali dell'applicazione
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

// Importazione del modulo FormsModule per abilitare il data binding con ngModel nei form
import { FormsModule } from '@angular/forms';

@NgModule({
  // Dichiarazione dei componenti utilizzati nell'applicazione
  declarations: [
    AppComponent,      // Componente principale dell'app
    WelcomeComponent,  // Componente della pagina di benvenuto
    LoginComponent     // Componente della pagina di login
  ],
  // Importazione dei moduli necessari per il funzionamento dell'app
  imports: [
    BrowserModule,     // Necessario per eseguire l'app in un browser
    AppRoutingModule,  // Modulo di routing per la navigazione tra le pagine
    FormsModule        // Abilita l'uso di ngModel per il data binding nei form
  ],
  // Provider per eventuali servizi globali (vuoto in questo caso)
  providers: [],
  // Definizione del componente principale che viene avviato all'avvio dell'app
  bootstrap: [AppComponent]
})
export class AppModule { }