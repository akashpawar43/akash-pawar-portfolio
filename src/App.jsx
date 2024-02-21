import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import './App.css'
import Navbar from './layout/Navbar';

function App() {

  return (
    <div className='app min-h-screen'>
      <header>
        <Navbar />
      </header>
      <Sidebar />
      <main>
        <Content />
      </main>
    </div>

  )
}

export default App
