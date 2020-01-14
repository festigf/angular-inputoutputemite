import { Component,OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Output() nameOut : EventEmitter<string>;
  constructor(){
    this.nameOut=new EventEmitter();
  }
  ngOnInit(){
    
    this.nameOut.emit(this.name+" mod!!");
  }

}
