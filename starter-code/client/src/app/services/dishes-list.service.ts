import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DishesListService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getAllDishes() {
    return this.http.get(this.baseUrl + '/api/dishes');
  }

}