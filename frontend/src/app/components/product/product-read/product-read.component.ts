import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe((products:Product[]) => {
      this.products = products
      console.log(products)
    })
  }

}
