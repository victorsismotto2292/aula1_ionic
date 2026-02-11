import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  AC='';
  AG='';
  AT='';
  res = 0;

  media(){
    this.res = ((parseFloat(this.AC)*0.2) + (parseFloat(this.AG)*0.10) + (parseFloat(this.AT)*0.70))/3;
  }

}
