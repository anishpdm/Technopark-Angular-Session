import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

   val="Welcome To ICT Academy";
   status=true;


  constructor() { }

  ngOnInit() {
  }

}