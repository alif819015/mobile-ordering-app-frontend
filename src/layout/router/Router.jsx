import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/page/main/Main";
import Home from "../../components/page/home/Home";
import PhoneDetails from "../../components/page/phone/phoneDetails/PhoneDetails";
import Error from "../../components/page/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <PhoneDetails />,
        loader: ({ params }) =>
          fetch(
            `https://mobile-ordering-app-backend.vercel.app/phones/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
