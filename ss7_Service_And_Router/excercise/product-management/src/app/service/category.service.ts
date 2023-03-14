import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  private API_URL = 'http://localhost:3000/categories';


  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }
  saveCategory(value):Observable<Category>{
    return this.http.post<Category>(this.API_URL,value);
  }
  findById(id:number):Observable<Category>{
    return this.http.get<Category>(this.API_URL + '/' + id);
  }
  deleteCategory(id: number):Observable<Category> {
    return this.http.delete<Category>(this.API_URL + '/' +id);
  }
}
