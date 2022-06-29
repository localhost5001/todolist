import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className="navbar mx-auto bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">TODOs</a>
      </div>
  </div>
    <Outlet />
    </>
  )
}
