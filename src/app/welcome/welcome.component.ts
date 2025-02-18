import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  constructor() {} // chiamata quando l'istanza del componente è creata
  
    // implementiamo il costruttore della classe
    ngOnInit(): void {
      console.log('Costruttore di WelcomeComponent chiamato!');
    
  }
}
