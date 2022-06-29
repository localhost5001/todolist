import { useState, useMemo } from 'react'

import TodoItem from '@/components/todoItem'
import NewTodoItem from '@/components/newTodoItem'

import type { TodoItemPayload } from '@/models/todoItem'

interface TodoListProps {
  id: number
  title: string
}

export default function TodoList (props: TodoListProps) {
  const [showNewItem, setShowNewItem] = useState(false)

  const [items, setItems] = useState([
    { id: 1, checked: false, text: 'Potato' },
    { id: 2, checked: false, text: 'Apples' },
    { id: 3, checked: false, text: 'Tea' },
  ])

  const handleItemCheckedChange = (index: number, checked: boolean) => {
    const newItems = [...items]
    newItems[index].checked = checked
    setItems(newItems)
  }
  const handleItemTextChange = (index: number, text: string) => {
    const newItems = [...items]
    newItems[index].text = text
    setItems(newItems)
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
