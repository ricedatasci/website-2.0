// import logo from './logo.svg';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Join from './pages/Join';
import './App.css';

function App() {
  const routes = [
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/programs',
      element: <Program />,
    },
    {
      path: '/join',
      element: <Join />,
    },
  ];
  return useRoutes(routes);
}

export default App;
