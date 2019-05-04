import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {


  fetchDatas=[];
  constructor(private apiService:ApiserviceService) { 

    this.onGetData();
  }

onGetData(){

  this.apiService.getServerData().subscribe(
(newData:any[])=>{
  console.log(newData);
  this.fetchDatas=newData

},
(error)=>{
  console.log(error);

}

  );

}

 



  ngOnInit() {
  }

}
