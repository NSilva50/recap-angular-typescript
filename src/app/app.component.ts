import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  displayParagraph: boolean = false;

  users: [{
    name: 'user1',
    age: '43'
  },{
    name: 'user2',
    age: '22'
  },{
    name: 'user3',
    age: '100'
  }];
}
