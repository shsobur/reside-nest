import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main/Main";
import HomePageLayout from "./Layout/Pages/HomePageLayout/HomePageLayout";
import UpdateProfileLayout from "./Layout/Pages/UpdateProfileLayout/UpdateProfileLayout";
import ContactPageLayout from "./Layout/Pages/ContactPageLayout/ContactPageLayout";
import ErrorPage from "./Layout/conmponents/ErrorPage/ErrorPage";
import SingIn from "./Layout/Pages/Authentication/SingIn/SingIn";
import SingUp from "./Layout/Pages/Authentication/SingUp/SingUp";
import AuthProvider from "./Layout/conmponents/AuthProvider/AuthProvider";
import EstateCardDetails from "./Layout/conmponents/EstateCardDetails/EstateCardDetails";
import PrivetRoutes from "./Layout/conmponents/PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfileLayout></UpdateProfileLayout>,
      },
      {
        path: "/contact",
        element: <ContactPageLayout></ContactPageLayout>,
      },
      {
        path: "/singin",
        element: <SingIn></SingIn>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/estate/details/:id",
        element: <PrivetRoutes><EstateCardDetails></EstateCardDetails></PrivetRoutes>,
        loader: () => fetch("../estate.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
