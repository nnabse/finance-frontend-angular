import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL_LINK } from '../links.constants';
import { QueryParams } from '@models/Spend';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(link: string, params?: QueryParams): Observable<T> {
    return this.http.get<T>(`${GLOBAL_LINK}${link}`, { params });
  }

  create<T>(link: string, body: object, params?: QueryParams): Observable<T> {
    return this.http.post<T>(`${GLOBAL_LINK}${link}`, body, { params });
  }

  rename<T>(link: string, params: QueryParams, body: object): Observable<T> {
    return this.http.patch<T>(`${GLOBAL_LINK}${link}`, body, { params });
  }

  delete<T>(link: string, params?: QueryParams): Observable<T> {
    return this.http.delete<T>(`${GLOBAL_LINK}${link}`, { params });
  }
}
