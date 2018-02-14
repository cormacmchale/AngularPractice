import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presidents',
  templateUrl: './presidents.component.html'
})
export class PresidentsComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {

  }

  names: string[] = ["Higgins","McAleese","Robinson","Hillery","O Dalaigh"] ;
  
  presidents: object[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];


}
