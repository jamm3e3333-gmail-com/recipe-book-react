import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
