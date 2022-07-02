import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Loaitin } from '../models/loaitin/loaitin.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loc-loai-tin-tuc',
  templateUrl: './loc-loai-tin-tuc.component.html',
  styleUrls: ['./loc-loai-tin-tuc.component.css']
})
export class LocLoaiTinTucComponent implements OnInit {
  
  photoPath: string = this.service.PhotoUrl
  ActivateAddEdit: boolean = false
  typeOptions: any[]
  blog: any

  dsLoaitin:Loaitin[]
  loaitintuc: any[]
  listBlog: any[]
  totalLength:any;
  page:number=1;
  constructor(private activatedRoute: ActivatedRoute, private service: SharedService,private route:Router) { }
  ngOnInit(): void {
    this.loadData()
    this.service.getAllTypeNew().subscribe((d:any) => {
      this.loaitintuc = d;
      this.totalLength=this.loaitintuc.length;
        console.log(d);
    })
  }

  loadData(){    
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params["maloai"];
      this.service.logTheoLoaiTin(id).subscribe(data => {
        this.listBlog = data
      })
    });
  }
  chitiettintuc(item: any){
    console.log(item);
    localStorage.removeItem("ProductDetail")
    localStorage.setItem("ProductDetail", JSON.stringify(item))
    this.route.navigate([`/chitiettintuc`]);
  }
}
