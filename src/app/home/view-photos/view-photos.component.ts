import { PER_PAGE } from './../../common/constants/Defines';
import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css']

})
export class ViewPhotosComponent implements OnInit {
  private errorMessage;
  private isLoading = false;
  photoArray = [];
  pageNum = 1;
  total: number;
  private searchKey;
  private userId;

  constructor(private route: ActivatedRoute, private homeservice: HomeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.isLoading = true;
      if (params['searchkey']) {
        this.searchKey = params['searchkey']
        if (params['userId']) {
          this.userId = params['userId']
        }
        this.homeservice.search(this.searchKey, this.userId, PER_PAGE.NUMBER, this.pageNum).subscribe(respone => {
          this.isLoading = false;
          this.errorMessage = this.homeservice.errorMessage;
          this.homeservice.errorMessage = null;
          if (!this.errorMessage) {
            this.photoArray = respone['photos']['photo'];
            this.total = respone['photos']['total'];
            this.pageNum = respone['photos']['page'];
           }
          else {
            this.photoArray = [];
             this.total = 0;
            this.pageNum = 1;
 
          }
        })
      }
    });
  }
  getPage(page: number) {
    this.isLoading = true;
    this.homeservice.search(this.searchKey, this.userId, PER_PAGE.NUMBER, page).subscribe(respone => {
      this.isLoading = false;
      this.errorMessage = this.homeservice.errorMessage;
      this.homeservice.errorMessage = null;
      if (!this.errorMessage) {
        this.photoArray = respone['photos']['photo'];
        this.total = respone['photos']['total'];
        this.pageNum = respone['photos']['page'];
      }
      else {
        this.photoArray = [];
        this.total = 0;
        this.pageNum = 1;
      }
    })
  }
}
