import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = []
  constructor (private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => this.products = res)
  }
  removeP(id: number) {
    if (confirm('Remove')) {
      this.productService.remove(id).subscribe(res => this.products = this.products.filter((p: any) => p.id !== id))
    }
  }
}
