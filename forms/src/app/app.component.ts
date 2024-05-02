import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = ['Basic', 'Advance', 'Pro'];
  selected = 'Advance';
  onSubmit(form :NgForm)
  {
    console.log(form);
  } 
  }