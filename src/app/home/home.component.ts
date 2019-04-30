import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admno:number=8686868;
  status=false;
  clicked=false;


  onButtonClick(){

   this.clicked =true;
  }


  getStatus()

  {

    return this.status;
  }

  constructor() {

setTimeout( ()=>{
  this.status=true
},5000 )

   }

  ngOnInit() {
  }

}
