import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main/Main";
import HomePageLayout from "./Layout/Pages/HomePageLayout/HomePageLayout";
import UpdateProfileLayout from "./Layout/Pages/UpdateProfileLayout/UpdateProfileLayout";
import ContactPageLayout from "./Layout/Pages/ContactPageLayout/ContactPageLayout";
import ErrorPage from "./Layout/conmponents/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>
      },
      {
        path: "/updateprofile",
        element: <UpdateProfileLayout></UpdateProfileLayout>,
      },
      {
        path: "/contact",
        element: <ContactPageLayout></ContactPageLayout>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
