import Login from './components/authentication/Login'
import Navigation from './components/UI/Navigation'
import Welcome from './components/welcome/Welcome'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import SignUp from './components/authentication/SignUp'


function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <Navigation />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: 'login',
                element: <Login />,
              }, {
                path: 'signup',
                element: <SignUp />,
              },
              {
                path: '',
                element: <Welcome />,
              },
            ]
          },
        ])}
      />
    </>
  )
}

export default App
