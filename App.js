import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> }, // index: true == path: '' here
      { path: 'products', element: <ProductPage /> },
      { path: 'products/:productID', element: <ProductDetailPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
