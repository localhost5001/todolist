import data from './data.json'

import { TodoItemModel } from '@/models/todoItem'

export const getTodosByListId = (listId: number): Promise<TodoItemModel[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = data.filter((item) => item.listId === listId)
      resolve(filtered)
    }, 2000)
  })
}
