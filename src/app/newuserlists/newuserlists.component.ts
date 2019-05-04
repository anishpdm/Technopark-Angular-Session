import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

import {ApiserviceService} from '../apiservice.service'


@Component({
  selector: 'app-newuserlists',
  templateUrl: './newuserlists.component.html',
  styleUrls: ['./newuserlists.component.css']
})
export class NewuserlistsComponent implements OnInit {
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
