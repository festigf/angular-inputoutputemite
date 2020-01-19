import { Component, OnInit } from '@angular/core';
import {interval } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  nomeModificato:string="";
  i:any=null;
  ora:string="";
  options = {'weekday': 'long', 'month': '2-digit', 'day': '2-digit', 'year': 'numeric'};

  constructor( ){

  }
  ngOnInit(){
    this.i=interval(1000).subscribe(
      count=>{
        count++;
        this.nomeModificato+=count;
        this.ora=new Date().toLocaleString('it-IT', this.options);
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
      }
    )
  }
  OnNameOut(nameOut:string){
    this.nomeModificato=nameOut;
  }
}
