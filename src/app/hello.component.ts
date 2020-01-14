import { Component,OnInit Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Output() nameOut : EventEmitter<string>;
  ngOnInit(){
    this.name+=" mod!!";
    this.nameOut.emit(this.name);
  }

}
