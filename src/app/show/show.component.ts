import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }
  @Input() allUser = {
    name : "", email : "", password : ""
  };


  ngOnInit(): void {
  }

}
