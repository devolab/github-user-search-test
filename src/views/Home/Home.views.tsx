import {
  RouterProvider,
} from "react-router-dom";
import router from "../../routes/Router";

export default function Home() {

  return (
    <div className="container">
      <img className="github-logo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" alt="GitHub Logo" />
      <h1 className="small home-description">Search any github user available on the platform</h1>

      <RouterProvider router={router} />
    </div>
  )
}