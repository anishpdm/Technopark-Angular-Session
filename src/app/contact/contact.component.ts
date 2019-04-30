import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

getName=''
getMsg=''
getEmail=''
getMob=''


  onSubmit(form:NgForm){

    console.log(form.value)

    this.getName=form.value.name
    this.getMsg=form.value.msg
    this.getMob=form.value.mob

  }

  constructor() { }

  ngOnInit() {
  }

}
