import './App.css'
import BottomNav from './components/BottomNav'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'

function App() {

  return (
    <div className=''>
      <Header/>
      <div className='m-4'>
        <RouterConfig/>
      </div>
      <BottomNav/>
    </div>
  )
}

export default App
