import './globals.css';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages/Home';
import AuthLayout from './_auth/AuthLayout';

const App = () => {
  return (
    <main className="">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App