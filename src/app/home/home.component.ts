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

  private errorMessage;
  constructor(private fb: FormBuilder, private homeservice: HomeService) { }

  ngOnInit() {

    this.form = this.fb.group({
      searchKeyField: [this.searchKey, Validators.required],
      userIdField: '',


    });
  }
  search(searchKey, userId) {
    this.homeservice.search(searchKey, userId).subscribe(respone => {
      this.errorMessage = this.homeservice.errorMessage;
      this.homeservice.errorMessage = null;
      if (!this.errorMessage) {
        this.form.reset();
                console.log(respone)

      }
      
      
    })
  }

}
