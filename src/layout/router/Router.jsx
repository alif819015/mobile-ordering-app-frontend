import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/page/main/Main";
import Home from "../../components/page/home/Home";
import PhoneDetails from "../../components/page/phone/phoneDetails/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
            `https://mobile-ordering-app-backend-pu2yj6ph1-alif819015.vercel.app/phones/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
