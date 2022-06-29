import { useRecoilValue } from 'recoil'

import TodoList from '@/components/todoList'

import { todoListsState } from '@/state/todos'

export default function Home() {
  const todoLists = useRecoilValue(todoListsState)

  return (
    <div className="h-screen grid place-items-center">
      <div className='w-full p-5 flex justify-center'>
        <div className='grid grid-cols-3 gap-4 w-full h-auto'>
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
