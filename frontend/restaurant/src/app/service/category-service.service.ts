import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {


  baseUrl = 'http://localhost:8080/api/allCategoies';
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map (
        response => response
      )
    )
  }

}
