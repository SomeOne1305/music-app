import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import NotFound from './pages/NotFound'
import User from './layouts/User'
import Admin from './layouts/Admin'
import { Control, LoginPage } from './pages/admin'

export const router  = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:'',
        element:<User/>
      },
      {
        path:'admin/',
        element:<Admin/>,
        children:[
          {
            path:"login",
            element:<LoginPage/>
          },
          {
            path:"control",
            element:<Control/>
          }
        ]
      }
    ]
  },
])