import {Injectable} from '@angular/core';
import {IProduct} from "../model/i-product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  product: IProduct = null;
  products: IProduct[] = [
    {
      id: 1,
      name: "Iphone 5",
      price: 200,
      description: "new"
    }, {
      id: 2,
      name: "Iphone 6 plus",
      price: 250,
      description: "99%"
    }, {
      id: 3,
      name: "Iphone 8",
      price: 300,
      description: "new VNA"
    }, {
      id: 4,
      name: "Iphone X",
      price: 350,
      description: "new"
    }, {
      id: 5,
      name: "Iphone 11",
      price: 400,
      description: "new VNA"
    }
  ]

  getAll() {
    return this.products;
  }

  addNewProduct = (value): boolean => {
    if (value == null) {
      return false
    } else {
      this.products.push(value);
      return true;
    }
  }

  getProductDetail(id) {
    return this.products.find((item) => item.id == id)

  }
  editProduct(idEdit, value2){
    debugger
    this.products = this.products.map(item => {
      if (item.id == idEdit){
        return value2;
      }else return item
    })
    }

  deleteProduct(idDelete: number) {
    this.products = this.products.filter(item =>  item.id !== idDelete);
  }
}


