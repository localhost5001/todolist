import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">Todos</a>
    </div>
    <Outlet />
    </>
  )
}
