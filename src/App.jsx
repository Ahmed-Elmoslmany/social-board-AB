
import { RouterProvider, createBrowserRouter, useNavigate, useNavigation, useRoutes } from 'react-router-dom'
import './App.css'
import AppLayout from './ui/AppLayout'
import Register from './features/Auth/Register'
import { AuthProvider } from './context/AuthContext'
import Logout from './ui/Logout'
import { PostsProvidor } from './context/PostsContext'
import MainApp from './pages/MainApp'

function App() {



  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      
      children: [
        { path: '/app', element: <MainApp />},
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
      <PostsProvidor >

   <RouterProvider router={router}>

   </RouterProvider>
      </PostsProvidor>
    </AuthProvider>
  )
}

export default App
