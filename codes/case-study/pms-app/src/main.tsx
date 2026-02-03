import { createRoot } from 'react-dom/client'
//import './index.css'
import './theme.min.css'
import App from './components/app/App'
import { BrowserRouter as RouterEngine } from 'react-router-dom'
import { Provider } from "react-redux";
import AppReduxStore from './redux/store';

createRoot(document.getElementById('root')!).render(
    <Provider store={AppReduxStore}>
        <RouterEngine>
            <App />
        </RouterEngine>
    </Provider>
)
