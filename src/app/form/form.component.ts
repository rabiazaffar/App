import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Output() shareUser = new EventEmitter()
  addUserDetails(form:NgForm){
    const user = {
      name:form.value.name, email:form.value.email, password:form.value.password
    };
    this.shareUser.emit(user);
  }

  ngOnInit(): void {
  }

}
