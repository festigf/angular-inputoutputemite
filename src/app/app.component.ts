import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval } from 'rxjs';
import {GetMusicService} from './getmusic.service';
import {Book} from './Book';
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
  
  options = {'weekday': 'short', 'month': '2-digit', 'day': '2-digit', 'year': 'numeric',hour:"numeric",minute:"numeric",second:"numeric"};

  dataPipe:Date=new Date();
  music:Book[]=[];
  constructor(private getMusicService:GetMusicService ){
    this.getMusicService.getMusic().subscribe( (music:Book[]) =>{
      console.log(music[0]);
      this.music=music;
    })
  }
  ngOnInit(){
    this.i=interval(1000);

    this.i.subscribe(
      count=>{
        count++;
        this.nomeModificato+=count;
        this.ora=new Date().toLocaleString('it-IT', this.options);
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
      }
    )
  }

  ngOnDestroy(){
    this.i.unsubscribe();
  }
  OnNameOut(nameOut:string){
    this.nomeModificato=nameOut;
  }
}
