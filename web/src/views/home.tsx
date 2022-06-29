import { useMemo } from 'react'
import TodoList from '@/components/todoList'

import type { TodoListModel } from '@/models/todoList'

export default function Home() {
  const todoLists = useMemo<TodoListModel[]>(() => [
    { id: 1, title: 'Groceries' },
    { id: 2, title: 'Ideas' },
    { id: 3, title: 'Activities for Saturday' },
    { id: 4, title: 'Project tasks' },
    { id: 5, title: 'Ideas to test' },
  ], [])

  return (
    <div className="h-screen grid place-items-center">
      <div className='w-full p-5 flex justify-center'>
        <div className='grid grid-cols-5 gap-4 w-full h-auto'>
          {
            todoLists.map(l => (
              <TodoList key={l.id} id={l.id} title={l.title} />
            ))
          }
        </div>
      </div>      
    </div>
  )
}
