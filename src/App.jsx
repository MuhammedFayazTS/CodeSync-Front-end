import { SignIn } from 'Pages/Auth/SignIn'
import { SignUp } from 'Pages/Auth/SignUp'
import EditorLayout from 'Pages/Editor/EditorLayout'
import Home from 'Pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <section className="w-full relative bg-white dark:bg-[#06080b]">

      {/* for bg pattern */}
      <div className="z-0 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/code-editor/:id' element={<EditorLayout />} />
        </Routes>
    </section>
  )
}

export default App
