import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import * as Routes from '../common/constants/routes-config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class HomeService {
  errorMessage = null;
  photos = [];
  constructor(private http: HttpClient) { }

  public search(searchKey, userId) {
    let url: string;
    url = Routes.API_URLS.Flicker.GET
      .replace('{tags}', searchKey)
      .replace('{user_id_value}', userId);
    if (!userId) {
      url = Routes.API_URLS.Flicker.GET
        .replace('{tags}', searchKey)
        .replace('{user_id_value}', '')

        .replace('user_id=&', '')
    }
    console.log(url)

    return this.http.get(url).map((response: Response) => {
      const data = response;
      if (data['stat'] == 'ok') {
        let photo = [];

        if (data['photos']['photo']) {
          photo = data['photos']['photo'];
          if (photo.length > 0) {
            this.photos.push({ [searchKey]: photo[0] });
            return photo;
          }
          else {
            this.errorMessage = "no photos avaiable"
          }
        }
      }
      else {
        this.errorMessage = data['message']
      }
    }).catch((error) => Observable.throw(this.getError(error)));

  }
  public getError(error) {
    console.log(error)
    // let errorCode = error.json().operationError.code;

  }
}
