import { Component, OnInit } from '@angular/core';
import { Sanpham } from '../models/sanpham/sanpham.model';
import { CartService } from '../service/cart.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listPrd: Sanpham[]
  listName:string
  PrdImgPath = this.service.PhotoUrl

  constructor(private service: SharedService, private cartService: CartService) { }

  ngOnInit(): void {
    let keySearch = localStorage.getItem("keyword")
    if(keySearch){
      console.log(keySearch);
      
      this.service.GetSPByName(keySearch).subscribe(data => {
        this.listPrd = data
        console.log(this.listPrd);
      })
    
      this.listName = 'Có '+this.listPrd.length+' kết quả cho '+keySearch;
      console.log(this.listName);
    }
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`Đã thêm ${product.tensanpham}`)
  }

}
