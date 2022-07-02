import { SharedService } from './../shared.service';
import { Xemlaidonhang } from './../models/xemlaidonhang/xemlaidonhang.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-danhsachmua',
  templateUrl: './danhsachmua.component.html',
  styleUrls: ['./danhsachmua.component.css']
})
export class DanhsachmuaComponent implements OnInit {

  constructor(private service: SharedService, private activatedRoute: ActivatedRoute) { }

  SODIEM = 3
  BINHLUAN = ''

  MyOrders: any[]
  PrdImgPath: string
  KhachHangID: number

  currentDate = new Date()

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.KhachHangID = params["KhachHangID"];
      this.loadMyOrders();
    });

    this.PrdImgPath = this.service.PhotoUrl
  }

  loadMyOrders() {
    this.service.getMyOrders(this.KhachHangID).subscribe(data => {
      this.MyOrders = data

      if (this.MyOrders) {
        this.MyOrders.forEach(element => {
        });
      }
      setTimeout(this.voting, 0.1)
    })

  }

  btnVoted(param:number){
    let user = localStorage.getItem("user")
    if(user){
      let thisRate:Xemlaidonhang = {
        id: 0,
        MASANPHAM: param,
        SODIEM: this.SODIEM,
        BINHLUAN: this.BINHLUAN,
        HANG: JSON.parse(user).TENKH
      }
      this.service.vote(thisRate).subscribe(data=>{
        alert(`Đánh giá thành công, hệ thống sẽ cập nhật sau giây lát!`)
      })
    }
    const customerVote = document.querySelectorAll(".customer-vote")
    if (customerVote) {
      customerVote.forEach(element => {
        element.setAttribute("style", "display: none")
      });
    }
    this.SODIEM = 3; this.BINHLUAN = ''
  }

  btnExitVoted(){
    const customerVote = document.querySelectorAll(".customer-vote")
    if (customerVote) {
      customerVote.forEach(element => {
        element.setAttribute("style", "display: none")
      });
    }
    this.SODIEM = 3; this.BINHLUAN = ''
  }

  voting() {
    const btnVote = document.querySelectorAll(".btn-vote")
    const customerVote = document.querySelectorAll(".customer-vote")
    if (btnVote) {
      for (let i = 0; i <= btnVote.length; i++) {
        btnVote[i].addEventListener('click', () => {
          customerVote[i].setAttribute("style", "display: block")
        })
      }
    }
  }

  voted() {
    const btnVote = document.querySelectorAll(".btn-voted")
    if (btnVote) {
      for (let i = 0; i <= btnVote.length; i++) {
        btnVote[i].addEventListener('click', () => {
          alert(`Bạn chỉ có thể thực hiện 1 đánh giá với 1 lần mua!`)
        })
      }
    }
  }

}
