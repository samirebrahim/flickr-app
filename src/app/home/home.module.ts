import { NgxPaginationModule } from 'ngx-pagination';
import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderBar } from '../loader/loader.component';
import { ViewPhotosComponent } from './view-photos/view-photos.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [HomeService],
  declarations: [HomeComponent, LoaderBar, ViewPhotosComponent, ImageLoaderComponent]
})
export class HomeModule { }
