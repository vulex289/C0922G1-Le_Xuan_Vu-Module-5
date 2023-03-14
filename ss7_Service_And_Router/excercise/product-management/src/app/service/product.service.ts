import {Injectable} from '@angular/core';
import {IProduct} from "../model/i-product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  private API_URL = 'http://localhost:3000/products';

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }

  addNewProduct = (value): Observable<IProduct> => {
    return this.http.post<IProduct>(this.API_URL, value);
  }

  getProductDetail(id: number) {
    return this.http.get<IProduct>(this.API_URL + '/' + id)
  }

  editProduct(idEdit, value2) {
    return this.http.put<IProduct>(this.API_URL + '/' + idEdit, value2)
  }

  deleteProduct(idDelete: number) {
    return this.http.delete<IProduct>(this.API_URL + '/' + idDelete);
  }
}


