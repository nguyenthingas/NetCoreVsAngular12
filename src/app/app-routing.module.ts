import { DanhsachmuaComponent } from './danhsachmua/danhsachmua.component';
import { BestsellNewestComponent } from './bestsell-newest/bestsell-newest.component';
import { ChitietTintucComponent } from './chitiet-tintuc/chitiet-tintuc.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LocTheoLoaiComponent } from './loc-theo-loai/loc-theo-loai.component';
import { MainShowComponent } from './main-show/main-show.component';
import { SearchComponent } from './search/search.component';
import { LocLoaiTinTucComponent } from './loc-loai-tin-tuc/loc-loai-tin-tuc.component';
import { LienheComponent } from './Lienhe/Lienhe.component';
const routes: Routes = [
  {path:'',component:MainShowComponent},
  {path:'locSP', component: LocTheoLoaiComponent},
  { path: 'cart', component: CartComponent },
  // {path:'giohang', component: CartComponent},
  { path: 'chitiet', component: ChitietComponent },
  { path: 'search', component: SearchComponent },
  {path:'chitiettintuc',component:ChitietTintucComponent},
  {path:'tintuc',component:BestsellNewestComponent},
  {path: 'tintuc/:maloai', component: LocLoaiTinTucComponent},
  {path: 'danhsachmua/:KhachHangID', component: DanhsachmuaComponent},
  {path:'lienhe',component:LienheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
