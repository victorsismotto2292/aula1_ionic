import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  n1 = '';
  n2 = '';
  resultado = 0;

  somar(){
    this.resultado = parseFloat(this.n1) + parseFloat(this.n2);
  }
}
