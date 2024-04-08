import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Resume from './components/resume/resume.jsx'
import Tutorial from './components/tutorial/tutorial.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'

const router = createBrowserRouter([
    {
        path: '/portfolio-react',
        element: <App />
    },
    {
        path: '/portfolio-react/resume',
        element: <Resume />
    },
    {
        path: '/portfolio-react/tutorial',
        element: <Tutorial />
    },
    {
        path: '/portfolio-react/portfolio',
        element: <Portfolio />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
