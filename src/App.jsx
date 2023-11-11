
import { RouterProvider, createBrowserRouter, useNavigate, useNavigation, useRoutes } from 'react-router-dom'
import './App.css'
import AppLayout from './ui/AppLayout'
import Register from './features/Auth/Register'
import { AuthProvider } from './context/AuthContext'
import Logout from './ui/Logout'

function App() {



  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      
      children: [
        { path: '/app', element: <Logout /> },
        {
          path: '/register',
          element: <Register />,
        }
      ]
    },
    ,],
  )

  return (
    <AuthProvider >

   <RouterProvider router={router}>

   </RouterProvider>
    </AuthProvider>
  )
}

export default App
