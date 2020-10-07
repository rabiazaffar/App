import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventApp';

  newUser = {};
  getUser(user:Event){
    this.newUser = user;
  }
}
