import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [HomeService],
  declarations: [HomeComponent]
})
export class HomeModule { }
