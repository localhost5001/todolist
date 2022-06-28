import { useParams } from 'react-router-dom'
import Notfound from '@/views/notFound'

export default function TodoList() {
  const { id } = useParams()
  const idInt = id ? parseInt(id) : undefined

  if (!idInt || isNaN(idInt)) {
    return <Notfound />
  }

  return (
    <div>{idInt}</div>
  )
}
