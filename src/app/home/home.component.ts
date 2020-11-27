import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:any = "Hi! Welcome to Car Pool";
  text:any = "- To see the user dashboard register with facePrep company and Login! \n \n - To see company dashboard use Email:jhondoe@faceprep.com and Password:qwertyuiop";
  icon:any = "info";
}
