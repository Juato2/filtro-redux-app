import { Action } from '@ngrx/store';

export const AGREGAR_TODO             = '[TODO] Agregar todo';
export const BORRAR_TODO              = '[TODO] Borrar todo';
export const EDITAR_TODO              = '[TODO] Editar todo';
export const MARCAR_TODOS_TODO        = '[TODO] Marcar todos todo';
export const TOGGLE_TODO              = '[TODO] Toggle todo';
export const LIMPIAR_COMPLETADOS_TODO = '[TODO] Limpiar todo completados';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) { }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) { }
}

export class MarcarTodoAction implements Action {
    readonly type = MARCAR_TODOS_TODO;

    constructor(public completado: boolean) { }
}

export class LimpiarCompletadosTodoAction implements Action {
    readonly type = LIMPIAR_COMPLETADOS_TODO;
}

export type Acciones = AgregarTodoAction |
                       ToggleTodoAction |
                       EditarTodoAction |
                       BorrarTodoAction |
                       MarcarTodoAction |
                       LimpiarCompletadosTodoAction;