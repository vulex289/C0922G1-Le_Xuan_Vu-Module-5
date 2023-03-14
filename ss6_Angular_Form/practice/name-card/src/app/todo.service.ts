import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

  }

  private API_URL = ' http://localhost:3000/todos';
  getAll = (): Observable<Todo[]> => {
    return this.http.get<Todo[]>(this.API_URL);
  };

  save(todo): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.API_URL + '/' + id);
  }

  editTodo(id: number, todo): Observable<Todo> {
    return this.http.patch<Todo>(this.API_URL + '/' + id, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.API_URL + '/' + id);
  }
}
