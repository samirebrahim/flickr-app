import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import * as Routes from '../common/constants/routes-config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class HomeService {
  errorMessage = null;
  photos = [];

  constructor(private http: HttpClient) { }

  public search(searchKey, userId, number_per_page, pageNum): Observable<Response> {
    let url: string;
    url = Routes.API_URLS.Flicker.GET
      .replace('{tags}', searchKey)
      .replace('{number_per_page}', number_per_page)
      .replace('{pageNum}', pageNum)

      .replace('{user_id_value}', userId);
    if (!userId) {
      url = Routes.API_URLS.Flicker.GET
        .replace('{tags}', searchKey)
        .replace('{number_per_page}', number_per_page)
        .replace('{pageNum}', pageNum)

        .replace('{user_id_value}', '')

        .replace('user_id=&', '')
    }

    return this.http.get(url).map((response: Response) => {
      const data = response;
      if (data['stat'] == 'ok') {
        let photo = [];

        photo = data['photos']['photo'];
        if (photo.length > 0) {

          const index = _.findIndex(this.photos, (obj: any) => {
            return obj.searchkey === searchKey
          })
          if (index === -1) {
            this.photos.push({ searchkey: searchKey, photo: photo[0] });
          }
          return response;
        }
        else {
          this.errorMessage = "no photos avaiable"
        }

      }
      else {
        this.errorMessage = data['message']
      }
    })
  }

}
