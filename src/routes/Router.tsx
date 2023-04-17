import {
  createBrowserRouter,
} from "react-router-dom";
import { Search, Profile, ErrorPage } from "../views/index.views";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile/:username",
    element: <Profile />,
    errorElement: <ErrorPage />
  }
]);

export default router;