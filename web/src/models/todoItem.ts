export interface TodoItemModel {
  id: number
  listId: number
  checked: boolean
  text: string
}

export type TodoItemPayload = Omit<TodoItemModel, 'id'>
