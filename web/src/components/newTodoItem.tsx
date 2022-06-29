import { useState, useMemo } from 'react'

import { TodoItemPayload } from '@/models/todoItem'

interface NewTodoItemProps {
  listId: number
  onSave: (payload: TodoItemPayload) => void
}

export default function NewTodoItem(props: NewTodoItemProps) {
  const [text, setText] = useState('New Item')
  const [checked, setChecked] = useState(false)

  const disableSaveBtn = useMemo(() => {
    return !text || text.length < 1
  }, [text])
  

  const handleSaveBtnClick = () => {
    const payload: TodoItemPayload = {
      checked: checked,
      text: text,
      listId: props.listId
    }
    props.onSave(payload)
  }


  return (
    <div 
      className='
        flex space-x-4 
        animate-pulse focus-within:animate-none
        bg-neutral rounded-lg p-3 shadow-md
        transition ease-in-out duration-200 hover:scale-105 hover:bg-neutral-focus
      '
    >
      <input 
        type='checkbox' className='checkbox' 
        checked={checked} 
        onChange={() => setChecked(!checked)}
      />

      <input 
        type="text"
        defaultValue={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here" 
        className="input input-ghost input-xs w-full max-w-xs text-base"
        onFocus={e => e.target.select()}
      />

      <button 
        onClick={handleSaveBtnClick}
        className='btn btn-xs btn-success'
        disabled={disableSaveBtn}
      >
        Add
      </button>
    </div>
  )
}
