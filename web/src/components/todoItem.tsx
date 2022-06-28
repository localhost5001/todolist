import { useState, useMemo, useRef, useLayoutEffect } from 'react'

interface TodoItemProps {
  checked: boolean
  onCheckedChange: (val: boolean) => void
  text: string
  onTextChange: (val: string) => void
}

export default function TodoItem(props: TodoItemProps) {
  const textInputRef = useRef<HTMLInputElement>(null)
  const [textInputValue, setTextInputValue] = useState(props.text)
  const [showTextInput, setShowTextInput] = useState(false)

  const textClasses = useMemo(() => {
    return props.checked 
      ? 'text-base pl-2 w-full cursor-pointer line-through' 
      : 'text-base pl-2 w-full cursor-pointer'
  }, [props.checked])

  const handleTextClick = () => {
    setShowTextInput(true)
  }
  const handleTextInputBlur = () => {
    if (textInputValue) {
      props.onTextChange(textInputValue)
    } else {
      setTextInputValue(props.text)
    }
    setShowTextInput(false)
  }
  useLayoutEffect(() => {
    textInputRef?.current?.focus()
  }, [showTextInput])

  const renderInput = useMemo(() => {
    return showTextInput
      ? (
        <input 
          ref={textInputRef}
          type="text"
          defaultValue={textInputValue}
          onChange={e => setTextInputValue(e.target.value)}
          placeholder="Type here" 
          className="input input-ghost input-xs w-full max-w-xs text-base" 
          onBlur={handleTextInputBlur}
        />
      )
      : (
        <p className={textClasses} onClick={handleTextClick}>
          { props.text }
        </p>
      )
  }, [showTextInput, textInputValue])

  return (
    <div 
      className='
        flex space-x-4 
        bg-base-300 rounded-lg p-3 shadow-md
        transition ease-in-out duration-200 hover:scale-105 hover:bg-base-200
      '
    >
      <input 
        type='checkbox' className='checkbox' 
        checked={props.checked} 
        onChange={() => props.onCheckedChange(!props.checked)}
      />
      
      { renderInput }
    </div>
  )
}
