import Form from './components/page_one.tsx'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Second_page from './components/secnod_page.tsx'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='second_page/*' element={<Second_page />} />
          {/* <Route path='/second_page/*' element={<Second_page authorized={false} />} /> */}
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
