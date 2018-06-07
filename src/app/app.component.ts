import { Component } from '@angular/core';

class Friend {
  fname: string;
  lname: string;
  age: number;
  gender: string;

  constructor(
    fname: string,
    lname: string,
    age: number,
    gender: string
  ){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
  }
}

let friend1 = new Friend("Michard", "Tornado", 26, "Apache Helicopter");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
