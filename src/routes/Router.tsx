import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader.comp";

const Search = React.lazy(() => import("../views/Search/Search.views"));
const Profile = React.lazy(() => import("../views/Profile/Profile.views"));
const ErrorPage = React.lazy(() => import("../views/ErrorPage/ErrorPage.views"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div><Loader /></div>}>
        <Search />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/profile/:username",
    element: (
      <Suspense fallback={<div><Loader /></div>}>
        <Profile />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  }
]);

export default router;