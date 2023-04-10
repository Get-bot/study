import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Products from './pages/ProductsPage';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetailPage from './pages/ProductDetailPage';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="products " element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetailPage/> },
      { path: '*', element: <ErrorPage /> },
    ],
  }
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;