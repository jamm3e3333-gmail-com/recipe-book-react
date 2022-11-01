import Login from './components/authentication/Login'
import Navigation from './components/Navigation'
import Welcome from './components/welcome/Welcome'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import SignUp from './components/authentication/SignUp'
import RecipesContainer from './components/recipes/RecipesContainer'
import RecipeView from './components/recipes/RecipeView'

function App() {
  return (
      <Routes >
        <Route path='/' element={<Navigation />}>
          <Route index element={<Welcome />}  />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/recipes'>
            <Route index element={<RecipesContainer />} />
            <Route path=':id' element={<RecipeView />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
  )
}

export default App
