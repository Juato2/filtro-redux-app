import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { MarcarTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  public completado = false;

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
  }

  marcarTodos() {
    this.completado = !this.completado;

    const accion = new MarcarTodoAction(this.completado);
    this.store.dispatch(accion);
  }

}
