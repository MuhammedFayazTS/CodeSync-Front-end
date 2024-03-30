import EditorLayout from 'Pages/Editor/EditorLayout'
import Home from 'Pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/code-editor/:id' element={<EditorLayout />} />
      </Routes>
    </>
  )
}

export default App
