import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  products: any = {}
  constructor (private productsService: ProductService, private router: ActivatedRoute, private nav: Router) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    if (id) {
      this.productsService.get(id).subscribe(res => this.products = res)
    }
  }
  editP(){
    this.productsService.update(this.products).subscribe(data=>{
      this.nav.navigateByUrl('/products')
    })
  }

}