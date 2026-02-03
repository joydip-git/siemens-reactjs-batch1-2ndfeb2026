//import { Outlet } from 'react-router-dom'
import DashBoard from '../common/dash-board/DashBoard'
import AppRoutes from '../../routes/AppRoutes'
//import './App.css'

function App() {

  return (
    <>
      <DashBoard />
      <br />
      <div className='container container-fluid'>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
