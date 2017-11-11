import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /** searchKey text value */
  private searchKey = '';

  /** the form reference */
  private form: FormGroup;

  private photos = [];
  private errorMessage;
  private isLoading = false;

  constructor(private router: Router, private fb: FormBuilder, private homeservice: HomeService) { }

  ngOnInit() {
    this.photos = this.homeservice.photos;
    this.form = this.fb.group({
      searchKeyField: [this.searchKey, Validators.required],
      userIdField: '',

    });
  }
  search(searchKey, userId) {
    this.searchKey = userId;
    this.isLoading = true;

    this.homeservice.search(searchKey, userId, 1, 1).subscribe(respone => {
      this.isLoading = false;
      this.errorMessage = this.homeservice.errorMessage;
      this.homeservice.errorMessage = null;
      if (!this.errorMessage) {
        this.form.reset();

      }
    })
  }
  view(searchkey, userId) {
    let queryParams: any = { searchkey: searchkey }
    if (userId) {
      queryParams = { searchkey: searchkey, userId: userId };
    }
    this.router.navigate(['photos'], { queryParams: queryParams })
  }

}
