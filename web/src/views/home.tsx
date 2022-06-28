import TodoList from '@/components/todoList'

export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <div className='w-full p-5 flex justify-center'>
        <div className='grid grid-cols-5 gap-4 w-full h-auto'>
          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />

          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />
        </div>
      </div>      
    </div>
  )
}
