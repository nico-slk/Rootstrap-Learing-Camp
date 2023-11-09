import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='bg-slate-800 text-white h-full min-h-screen p-10 border-2 border-white'>
      <h1 className='text-5xl '>APP</h1>
      <div className='flex flex-row border-2 border-white'>
        <div className='text-2xl flex flex-col border-2 border-white w-1/5'>
          <Link to={'/home'} className="flex flex-col pt-5 pb-5 items-center hover:bg-slate-600 transition-colors ">HOME</Link>
          <Link to={'/clase-siete'} className="flex flex-col pt-5 pb-5 items-center hover:bg-slate-600 transition-colors ">Clase siete</Link>
          <Link to={'/clase-ocho'} className="flex flex-col pt-5 pb-5 items-center hover:bg-slate-600 transition-colors ">Clase ocho</Link>
          <Link to={'/clase-nueve'} className="flex flex-col pt-5 pb-5 items-center hover:bg-slate-600 transition-colors ">Clase nueve</Link>
          <Link to={'/clase-diez'} className="flex flex-col pt-5 pb-5 items-center hover:bg-slate-600 transition-colors ">Clase diez</Link>
          <Link to={'/clase-once'} className="flex flex-col pt-5 pb-5 items-center hover:bg-slate-600 transition-colors ">Clase once</Link>
        </div>
        <div className='w-4/5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
