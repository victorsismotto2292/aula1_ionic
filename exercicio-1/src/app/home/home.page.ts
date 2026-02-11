import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  dollar = '';
  real = 0;

  converter(){
    this.real = parseFloat(this.dollar)*5.20;
  }

}
