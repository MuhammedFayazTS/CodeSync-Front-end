import { SignIn } from 'Pages/Auth/SignIn';
import { SignUp } from 'Pages/Auth/SignUp';
import Home from 'Pages/Main/Home/Home.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from 'utils/ProtectedRoutes.jsx';
import { Toaster } from 'components/ui/toaster';
import { EditorLayout } from 'Pages/Main/Editor/EditorLayout';

function App() {
  return (
    <section className="w-full relative bg-white dark:bg-[#06080b]">
      {/* Background pattern */}
      <div className="z-0 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Routes>
        {/* Sign-up route */}
        <Route path='/sign-up' element={<SignUp />} />

        {/* Sign-in route */}
        <Route path='/sign-in' element={<SignIn />} />

        {/* Home route */}
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />

        {/* Default route */}
        <Route path='/' element={<Navigate to={'/home'} />} />

        {/* Code editor route */}
        <Route path='/code-editor/:id' element={<ProtectedRoute><EditorLayout /></ProtectedRoute>} />

      </Routes>


      {/* toaster */}
      <Toaster />

    </section>
  );
}

export default App;
