import { Component, OnInit } from '@angular/core';
import { IProducts } from '../product/products';

import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {

  constructor(private ps: ProductServiceService) { }
  productslist: IProducts[];
  ngOnInit(): void {
  this.ps.getProducts().subscribe(data => this.productslist = data);
  }

}
