import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import './App.css'
import Navbar from './layout/Navbar';

function App() {

  return (
    <div className='app'>
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
