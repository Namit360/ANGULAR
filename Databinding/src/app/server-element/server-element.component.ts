import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated, //by default emulated can change to none, native(shadowdom)
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement')element:{type:string, name: string, content:string};

  constructor(){
    console.log("constructor called!");
  }



  ngOnInit(){
    console.log("ngoninit called!");
  }

}
