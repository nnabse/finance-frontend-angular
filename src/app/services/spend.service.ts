import { Injectable } from '@angular/core';
import { Spend } from '@models/Spend';

import { HttpService } from './http.service';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

import {
  GET_ALL_SPENDS_LINK,
  CREATE_SPEND_LINK,
  RENAME_SPEND_LINK,
  DELETE_SPEND_LINK,
} from '../links.constants';

@Injectable({
  providedIn: 'root',
})
export class SpendService {
  public spendList$: BehaviorSubject<Spend[]> = new BehaviorSubject<Spend[]>(
    []
  );

  constructor(private httpService: HttpService) {}

  getAllSpends(): void {
    this.httpService
      .get<Spend[]>(GET_ALL_SPENDS_LINK)
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe((resp) => this.spendList$.next(resp));
  }

  createSpend(body: object): void {
    this.httpService
      .create<Spend>(CREATE_SPEND_LINK, body)
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe((resp) => {
        this.spendList$.next([...this.spendList$.value, resp]);
      });
  }

  renameSpend(_id: number, body: object): void {
    this.httpService
      .rename<Spend>(RENAME_SPEND_LINK, { _id }, body)
      .subscribe(() => {
        return this.spendList$.next(
          this.spendList$.value.map((elem) => {
            if (elem._id === _id) {
              return { ...elem, ...body };
            }
            return elem;
          })
        );
      });
  }

  deleteSpend(_id: number): void {
    this.httpService
      .delete(DELETE_SPEND_LINK, { _id })
      .pipe(catchError((err) => throwError(() => err)))
      .subscribe(() => {
        this.spendList$.next(
          this.spendList$.value.filter((elem) => _id !== elem._id)
        );
      });
  }
}
