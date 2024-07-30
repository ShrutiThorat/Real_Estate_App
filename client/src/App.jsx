import './layout.scss'
import Navbar from './components/Navbar'
import Homepage from './routes/homePage/Homepage'

const App = () => {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Homepage />
      </div>
    </div>
  )
}

export default App
