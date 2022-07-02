import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-chitiet-tintuc',
  templateUrl: './chitiet-tintuc.component.html',
  styleUrls: ['./chitiet-tintuc.component.css']
})
export class ChitietTintucComponent implements OnInit {

 
  TinTucID:number
  TIEUDE:string
  NGAYDANG:Date
  NOIDUNG:string
  IMAGE:string
  TRICHDAN:string

  prd: any
  loaitintuc: any[]
  PrdImgPath: string
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.loadProductDetails();
    this.PrdImgPath = this.service.PhotoUrl
    this.service.getAllTypeNew().subscribe(d => {
      this.loaitintuc = d
    })
  }

  loadProductDetails() {
    this.prd = localStorage.getItem('ProductDetail')
    if (this.prd) {
      this.TinTucID = JSON.parse(this.prd).TinTucID;
      this.TIEUDE = JSON.parse(this.prd).TIEUDE;
      this.NOIDUNG = JSON.parse(this.prd).NOIDUNG;
      this.IMAGE = JSON.parse(this.prd).IMAGE;
      this.NGAYDANG = JSON.parse(this.prd).NGAYDANG;
    }
   
  }


}
