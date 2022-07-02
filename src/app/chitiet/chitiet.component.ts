import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {

  SanPhamID:number
    TENSP:string 
    GIABAN:string
    IMAGE:string 
    MALOAI:string 
    MOTA:string 
    XUATXU:string 
    GIANHAP:number
    SOLUONGTON:number

  prd: any

  PrdImgPath: string
  constructor(private service: SharedService, public cartService: CartService) { }

  ngOnInit(): void {
    this.loadProductDetails();
    this.PrdImgPath = this.service.PhotoUrl
  }

  loadProductDetails() {
    this.prd = localStorage.getItem('ProductDetail')
    if (this.prd) {
      this.SanPhamID = JSON.parse(this.prd).SanPhamID;
      this.TENSP = JSON.parse(this.prd).TENSP;
      this.GIABAN = this.formatCurrency(JSON.parse(this.prd).GIABAN)
      this.IMAGE = JSON.parse(this.prd).IMAGE;
      this.MOTA = JSON.parse(this.prd).MOTA;
    }
    let x = document.getElementById("description")
    if (x) {
      x.innerHTML += `<h4 style="margin-top: 50px; color: #FE980F">Mô tả sản phẩm</h4>`
      x.innerHTML += this.MOTA
    }
  }

  addToCart(): void {
    if (this.prd) {
      this.cartService.addToCart(JSON.parse(this.prd));
      alert(`Đã thêm ${JSON.parse(this.prd).TENSP}`)
    }
  }

  formatCurrency(value: any) {
    let rs = value.toString().split("");
    for (let i = rs.length - 4; i >= 0; i -= 3) {
        rs[i] += ','
    }
    return rs.join('') + ' vnđ'
  }

}
