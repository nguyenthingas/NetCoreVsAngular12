import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Loaisanpham } from 'src/app/models/loaisanpham/loaisanpham.model';
import { Khachhang } from 'src/app/models/khachhang/khachhang.model';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem = 0
  products: any[] = [];
  totalMoney!: number;
  photoPath: string

  keyword: string

  kh_id:number
  kh_taikhoan:string
  kh_matkhau:string
  kh_matkhau2: string
  kh_diachi:string
  kh_sdt:string
  kh_email:string
  kh_tenkh:string

  listUser: Khachhang[]

  user: Khachhang

  dsLoaiSP: Loaisanpham[]
  constructor(private service: SharedService, private route: Router, private cartSerice: CartService) { }

  ngOnInit() {
    this.totalItem = this.cartSerice.getProducts().length
    this.service.getAllCate().subscribe(data => {
      this.dsLoaiSP = data
    })
    this.loadData()
    this.loadCart();
    let user=localStorage.getItem('user');

    if(user){
      this.kh_tenkh = JSON.parse(user).TENKH;
      this.kh_id = parseInt(JSON.parse(user).KhachHangID);
    }    
  }

  locSP(id:number){
    //xoá mloai cũ local
    localStorage.removeItem("maloai")  
    //add mloai mới local
    localStorage.setItem("maloai", JSON.stringify(id));
    //gọi đến router locsp
    this.route.navigate(['/locSP']);
  }
  loadData() {
    this.kh_id = 0
    this.kh_taikhoan = ''
    this.kh_matkhau = ''
    this.kh_matkhau2 = ''
    this.kh_diachi = ''
    this.kh_sdt = ''
    this.kh_email = ''
    this.kh_tenkh = ''
  }

  loginNow() {
    this.service.getAllUser().subscribe(data => {
      this.listUser = data
      for (let item of this.listUser) {
        if (this.kh_taikhoan == item.TAIKHOAN){
          if(this.kh_matkhau == item.MATKHAU){
            this.user = item
            localStorage.setItem('user', JSON.stringify(item))
            
            alert(`Chào mừng quay trở lại, ${item.TENKH}!`)
            break
          }
          else{
            alert(`Thông tin đăng nhập không chính xác!`)
            break
          }
        }
      }
    })
    location.reload();
  }

  log_out(){
    localStorage.removeItem('user')
    location.reload();
  }

  addUser() {
    this.user = {
      KhachHangID: this.kh_id,
      TAIKHOAN: this.kh_taikhoan,
      MATKHAU: this.kh_matkhau,
      DIACHI: this.kh_diachi,
      SODIENTHOAI: this.kh_sdt,
      EMAIL: this.kh_email,
      TENKH: this.kh_tenkh,
    }

    if (this.kh_matkhau != this.kh_matkhau2 || this.kh_taikhoan == '' || this.kh_tenkh == '' || this.kh_sdt == '') {
      alert('Phát hiện dữ liệu truyền vào không hợp lệ, vui lòng kiểm tra lại!')
    }
    else if (this.checkAccountDB() == false) {
      alert('Tài khoản hoặc số điện thoại đã được sử dụng, vui lòng kiểm tra lại!')
    }
    else {
      this.service.addUser(this.user).subscribe(data => {
        alert('Hoàn tất mở tài khoản!')
        location.reload()
      })
    }
  }

  checkAccountDB() {
    let rs = true
    this.service.getAllUser().subscribe(data => {
      console.log(data)
      for (let i of data) {
        if (this.kh_sdt == i.sdt || this.kh_taikhoan == i.taikhoan) {
          rs = false
        }
      }
    })
    return rs
  }

  loadCart() {
    this.cartSerice.products$.subscribe((res) => {
      this.products = res;
      this.totalMoney = 0;
      for (let p of this.products) {
        this.totalMoney += p.Quantity * p.giaban;
      }
    });
    this.photoPath = this.service.PhotoUrl
  }

  go(keyword: string) {
    localStorage.removeItem("keyword")
    localStorage.setItem("keyword", JSON.stringify(keyword))
    this.route.navigateByUrl(`/search`);
  }

  keyPress(event: any) {
    // let vl =(<HTMLInputElement>document.getElementById("keyword")).value;
    let vl = this.keyword;
    if(vl){
      if(event.keyCode == 13){
        this.go(vl)
      }
    }
  }
}
