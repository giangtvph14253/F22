import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  products: any ={
    name: '',
    price: '',
    image: '',
    decscription: ''
  }
  constructor (private productsService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  addP(){
    this.productsService.add(this.products).subscribe(data=>{
      this.router.navigateByUrl('/products')
    })
  }

}
