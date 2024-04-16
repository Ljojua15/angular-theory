import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-theory';
  mess: string = 'lasha'
  logLength(lenght: number){
    console.log(lenght)
  }
}
