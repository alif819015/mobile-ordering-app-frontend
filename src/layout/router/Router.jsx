import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/page/main/Main";
import Home from "../../components/page/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
