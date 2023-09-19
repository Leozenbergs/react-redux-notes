import { RouterProvider } from "react-router-dom";
import router from "../router/index"

const Default = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default Default;