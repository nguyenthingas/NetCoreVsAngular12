import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { Loaitin } from '../models/loaitin/loaitin.model';
@Component({
  selector: 'app-bestsell-newest',
  templateUrl: './bestsell-newest.component.html',
  styleUrls: ['./bestsell-newest.component.css']
})
export class BestsellNewestComponent implements OnInit {

  photoPath: string = this.service.PhotoUrl
  ActivateAddEdit: boolean = false
  typeOptions: any[]

  blog: any

  listBlogs: any[]
  dsLoaitin:Loaitin[]
  loaitintuc: any[]
  totalLength:any;
  page:number=1;
  constructor(private service: SharedService,private route:Router) { }

  ngOnInit(): void {
    this.refreshData();
    this.service.getAllCate().subscribe(data => {
      this.dsLoaitin = data
    })
    this.service.getAllTypeNew().subscribe((d:any) => {
      this.loaitintuc = d;
      this.totalLength=this.loaitintuc.length;
      console.log(d);
    })
  }

  refreshData() {
    this.service.getAllNews().subscribe(data => {
      this.listBlogs = data;
    })
    this.service.getAllTypeNew().subscribe(data => {
      this.typeOptions = data;
    })
  }

  filterCate(event: any) {
    let cateID: number = parseInt(event.target.value)
    if (cateID) {
      this.service.getNewsByCate(cateID).subscribe(data => {
        this.listBlogs = data;
      })
    }
    else {
      this.service.getAllNews().subscribe(data => {
        this.listBlogs = data;
      })
    }
  }

  chitiettintuc(item: any){
    console.log(item);
    localStorage.removeItem("ProductDetail")
    localStorage.setItem("ProductDetail", JSON.stringify(item))
    this.route.navigate([`/chitiettintuc`]);
  }

}
