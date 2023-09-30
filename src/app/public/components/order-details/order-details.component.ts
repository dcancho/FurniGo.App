import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  @Input() itemTitle: string;
  @Input() orderNumber: number;
  @Input() status: string;
  @Input() maxDate: Date;
  @Input() maxBudget: number;
  @Input() user: string;
  @Input() details: string;


  constructor() {
    this.itemTitle = "Mesa de Noche";
    this.orderNumber = 123456;
    this.status = "En fabricación";
    this.maxDate = new Date();
    this.maxBudget = 150.00;
    this.user = "Carpintería Manuel";
    this.details = "Mesa de noche de madera de abeto.";



  }
}
