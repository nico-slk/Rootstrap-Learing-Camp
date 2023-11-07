import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      APP
      <Outlet />
      <div className='link'>
        <Link to={'/home'} className="item">HOME</Link>
        <Link to={'/clase-siete'} className="item">Clase siete</Link>
        <Link to={'/clase-ocho'} className="item">Clase ocho</Link>
        <Link to={'/clase-diez'} className="item">Clase diez</Link>
        <Link to={'/clase-once'} className="item">Clase once</Link>
      </div>
    </div>
  )
}

export default App
