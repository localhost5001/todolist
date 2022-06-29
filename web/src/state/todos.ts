import { atom, atomFamily, selectorFamily } from 'recoil'

import { TodoItemModel } from '@/models/todoItem'
import { TodoListModel } from '@/models/todoList'

import { todoApi } from '@/api'

export const todoListsState = atom<TodoListModel[]>({
  key: 'todoLists',
  default: [
    { id: 1, title: 'Groceries' },
    { id: 2, title: 'Ideas' },
    { id: 3, title: 'Project tasks' },
  ]
})

export const todoFamily = atomFamily<TodoItemModel[], number>({
  key: 'todoFamily',
  default: selectorFamily({
    key: 'todoFamily/default',
    get: (listId) => async () => {
      const todos = await todoApi.getTodosByListId(listId)
      return todos
    }
  }) 
})
