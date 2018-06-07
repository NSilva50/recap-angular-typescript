import { Component, OnInit } from '@angular/core';

class CarBrand{
  make: string;

  constructor(make: string){
    this.make = make;
  }
}

class Car extends CarBrand {
  model: string;
  year: number;

  constructor(make: string, model: string, year: number){
    super(make);
    this.model = model;
    this.year = year;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ford = new CarBrand('ford');
  honda = new Car('honda', 'civic', 2010);
  
  ngOnInit(){
    console.log(this.getDetails())
  }

  getDetails(){
    return `Do you like the ${this.honda.make} ${this.honda.model}? This one is the ${this.honda.year}`;
  }
}
