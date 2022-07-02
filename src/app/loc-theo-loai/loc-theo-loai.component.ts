import { Component, OnInit } from '@angular/core';
import { Sanpham } from '../models/sanpham/sanpham.model';
import { SharedService } from '../shared.service';
import { CartService } from '../service/cart.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-loc-theo-loai',
  templateUrl: './loc-theo-loai.component.html',
  styleUrls: ['./loc-theo-loai.component.css']
})
export class LocTheoLoaiComponent implements OnInit {
  items: Sanpham[]
  constructor(private service:SharedService, private cartService: CartService,private route: Router) {
    route.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.loadSanpham()
      }
    });
   }

  urlHinhanh = this.service.PhotoUrl
  totalLength:any;
  page:number=1;
  ngOnInit(): void {
    
    this.loadSanpham()
  }

  loadSanpham(){
    //lấy ra id
    let id = localStorage.getItem("maloai")
    //ktra xem id tồn tại hay k
    if(id){
      //gọi api lấy về dsach sp theo loại
      this.service.getProductsByCate(parseInt(id)).subscribe((data:any) =>{ 
        // truyền dữ liệu trả về cho items
        this.items = data;
        // lấy ra độ dài của mảng
        this.totalLength=this.items.length;
      })
    }
  }

  addToCart(product: any): void {
    // gọi đến hàm addToCart và truyền xuống đối tượng sản phẩm
    this.cartService.addToCart(product);
    alert(`Đã thêm ${product.TENSP}`)
    // Load lại trang
    location.reload();
  }
  chitiet(item: any){
    // Xoá ProductDetail dưới loacl 
    localStorage.removeItem("ProductDetail")
    // Thêm ProductDetail dưới loacl 
    localStorage.setItem("ProductDetail", JSON.stringify(item))
    // Gọi đến router chitiet
    this.route.navigate([`/chitiet`]);
  }
}
