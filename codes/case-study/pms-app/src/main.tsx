import { createRoot } from 'react-dom/client'
//import './index.css'
import './theme.min.css'
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
