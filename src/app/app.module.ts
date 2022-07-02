import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './partials/slide/slide.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { MainShowComponent } from './main-show/main-show.component';
import { BestsellNewestComponent } from './bestsell-newest/bestsell-newest.component';
import { SharedService } from './shared.service';
import { LocTheoLoaiComponent } from './loc-theo-loai/loc-theo-loai.component';
import { CartComponent } from './cart/cart.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { SearchComponent } from './search/search.component';
import { ChitietTintucComponent } from './chitiet-tintuc/chitiet-tintuc.component';
import { LocLoaiTinTucComponent } from './loc-loai-tin-tuc/loc-loai-tin-tuc.component';
import { DanhsachmuaComponent } from './danhsachmua/danhsachmua.component';
import { LienheComponent } from './Lienhe/Lienhe.component';
@NgModule({
  declarations: [								
    AppComponent,
    SlideComponent,
    FooterComponent,
    HeaderComponent,
      MainShowComponent,
      BestsellNewestComponent,
      LocTheoLoaiComponent,
      CartComponent,
      ChitietComponent,
      SearchComponent,
      ChitietTintucComponent,
      LocLoaiTinTucComponent,
      DanhsachmuaComponent,
      LienheComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
