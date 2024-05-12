import { createBrowserRouter } from "react-router-dom";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import { RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;

