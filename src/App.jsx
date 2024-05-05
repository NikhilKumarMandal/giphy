import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./index.css";
import AppLayout from "./Layouts/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import GifProvider from "./context/context.jsx";
import SearchPage from "./pages/Search.jsx";
import Category from "./pages/Categories.jsx";
import GifPage from "./pages/SingleGif.jsx";
import Favorites from "./pages/Favorites.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App;
