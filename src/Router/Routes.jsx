import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
// import NotFound from '../Pages/NotFound';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement : <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
