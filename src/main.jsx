import { App } from './App.jsx'
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './contexts/User.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  
  <BrowserRouter>
    <UserProvider>
      <App/>
    </UserProvider>
  </BrowserRouter>,
)