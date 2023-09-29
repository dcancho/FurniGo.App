import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-three-d-viewer',
  templateUrl: './three-d-viewer.component.html',
  styleUrls: ['./three-d-viewer.component.css']
})
export class ThreeDViewerComponent {
  @Input() itemTitle: string;
  @Input() orderNumber: number;
  @Input() status: string;
  @Input() maxDate: Date;
  @Input() linkToItem: string;
  @Input() imgPath: string;
  @Input() maxBudget: number;
  @Input() userType: string;

  constructor() { 
    this.itemTitle = "Nombre del pedido";
    this.orderNumber = 123456;
    this.status = "En fabricación";
    this.maxDate = new Date();
    this.linkToItem = "/";
    this.imgPath = "https://picsum.photos/200/300";
    this.maxBudget = 250.00;
    this.userType = "experto";
  }
}
