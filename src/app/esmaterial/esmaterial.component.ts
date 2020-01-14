import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esmaterial',
  templateUrl: './esmaterial.component.html',
  styleUrls: ['./esmaterial.component.css']
})
export class EsmaterialComponent implements OnInit {
  dato:string;
  constructor() { }

  ngOnInit() {
  }

  onClick(nominativo:string){
    console.log(nominativo.value);
  }
}