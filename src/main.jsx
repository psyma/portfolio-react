import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Resume from './components/resume/resume.jsx'
import Tutorial from './components/tutorial/tutorial.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/resume',
        element: <Resume />
    },
    {
        path: '/tutorial',
        element: <Tutorial />
    },
    {
        path: '/portfolio',
        element: <Portfolio />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
