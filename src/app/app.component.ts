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
  constructor( ){

  }
  ngOnInit(){
    this.i=interval(1000).subscribe(
      count=>{
        count++;
        this.nomeModificato+=count;
        this.ora=Date.now().toLocaleString();
      }
    )
  }
  OnNameOut(nameOut:string){
    this.nomeModificato=nameOut;
  }
}
