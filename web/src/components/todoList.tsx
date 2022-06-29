import { useState, useMemo, Suspense } from 'react'
import { useRecoilState } from 'recoil'

import TodoItem from '@/components/todoItem'
import NewTodoItem from '@/components/newTodoItem'

import type { TodoItemPayload } from '@/models/todoItem'

import { todoFamily } from '@/state/todos'

interface TodoListProps {
  id: number
  title: string
}

function TodoList (props: TodoListProps) {
  const [items, setItems] = useRecoilState(todoFamily(props.id))
  const [showNewItem, setShowNewItem] = useState(false)

  const handleItemCheckedChange = (index: number, checked: boolean) => {
    setItems((oldArr) => {
      const oldItem = oldArr[index]
      const newArr = [...oldArr]

      newArr[index] = {...oldItem, checked: checked}
     
      return newArr
    })
  }
  const handleItemTextChange = (index: number, text: string) => {
    setItems((oldArr) => {
      const oldItem = oldArr[index]
      const newArr = [...oldArr]
      
      newArr[index] = {...oldItem, text: text}
     
      return newArr
    })
  }
  const handleAddBtnClick = () => {
    setShowNewItem(!showNewItem)
  }
  const onSaveClick = (payload: TodoItemPayload) => {
    console.log(payload)
  }

  const renderNewItemEl = useMemo(() => {
    if (showNewItem) {
      return (
        <div className='mb-2'>
          <NewTodoItem 
            listId={props.id}
            onSave={onSaveClick}
          />
        </div>
      )
    }

    return null
  }, [showNewItem])


  return (
    <div className='block'>
      <div className='w-full flex justify-between mb-1'>
        <div className='font-semibold text-lg'>
          { props.title }
        </div>
        <button 
          onClick={handleAddBtnClick}
          className='
            btn btn-sm 
          '
        >
          { showNewItem ? 'Cancel' : 'New' }
        </button>
      </div>

      { renderNewItemEl }

      <div className='flex flex-col space-y-2'>
        {
          items.map((item, index) => (
            <TodoItem 
              key={item.id} 
              checked={item.checked} 
              text={item.text} 
              onCheckedChange={(checked) => handleItemCheckedChange(index, checked)}
              onTextChange={(text) => handleItemTextChange(index, text)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default function TodoListSuspensed(props: TodoListProps) {
  return (
    <Suspense fallback={<div className='h-screen w-full grid place-items-center font-bold text-lg'>Loading...</div>}>
      <TodoList {...props} />
    </Suspense>
  )
}
