import { useState } from 'react'
import TodoItem from '@/components/todoItem'

export default function TodoList () {
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

  return (
    <div className='block'>

      <div className='w-full flex justify-between mb-1'>
        <div className='font-semibold text-lg'>
          List 1
        </div>
        <button 
          className='
            btn btn-sm 
          '
        >
          Add
        </button>
      </div>

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
