import Form from './components/page_one.tsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Second_page from './components/secnod_page.tsx'

function App() {

  return (
    <>
        <Routes>
          <Route path='/react-materialui.github.io/' element={<Form />} />
          <Route path='/react-materialui.github.io/second_page/*' element={<Second_page />} />
          {/* <Route path='/second_page/*' element={<Second_page authorized={false} />} /> */}
        </Routes>
    </>
  )
}

export default App
