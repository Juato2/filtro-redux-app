import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import * as fromFiltro from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [
  ]
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: fromFiltro.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    })
  }

}