import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nom = 'Jean';
  public date1=new Date();
  public date2=Date.now();
  constructor(
   ) {}
}
