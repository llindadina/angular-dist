import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }
salesPersonList: SalesPerson[] = [
// tslint:disable-next-line: quotemark
new SalesPerson('Anup', "Kumar", "anup.kumar@luv2code.com", 1),
new SalesPerson('John', 'Doe', 'john.doe@luv2code.com', 4),
new SalesPerson('Claire', 'Murphy', 'claire.murphy@luv2code.com', 9),
new SalesPerson('Mai', 'Truong', 'mai.truong@luv2code.com', 0)
];
ngOnInit(): void {
  }

}
