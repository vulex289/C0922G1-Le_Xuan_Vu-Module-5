import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  private id: number;
  todoEdit: FormGroup;

  constructor(private todoService: TodoService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDetailTodo(this.id);
    });
  }

  getDetailTodo(id: number) {
    this.todoService.findById(id).subscribe(item => {
      this.todoEdit = new FormGroup({
        id: new FormControl(item.id),
        content: new FormControl(item.content),
        complete: new FormControl(item.complete)
      });
    });
  }

  onEdit() {
    this.todoService.editTodo(this.id, this.todoEdit.value).subscribe(() => {
      this.router.navigateByUrl('');
      console.log(this.todoEdit.value);
    });
  }
}
