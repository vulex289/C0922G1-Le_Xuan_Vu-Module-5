import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  todos: Todo[] = [];

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  content = new FormControl();

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() => {
        this.getAll();
        this.content.reset();
        this.router.navigateByUrl('');
      });
    }
  }

    toggleTodo(i: number): boolean {
    return this.todos[i].complete === true;
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe(item => {
      this.todos = item;
    });
  }

  onDelete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getAll();
    });
  }
}
