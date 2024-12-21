import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./Components/Main/Main"
import Home from "./Components/Home/Home"
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs"
import Blogs from "./Components/Blogs/Blogs"
import ErrorPage from "./Components/ErrorPage/ErrorPage"
import JobDetails from "./Components/Jobs/JobDetails"


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/applied',
          loader:()=>fetch('https://next-level-two-ashen.vercel.app/jobs'),
          element:<AppliedJobs></AppliedJobs>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/jobs/:jobId',
          element:<JobDetails></JobDetails>,
          loader:({params})=>fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`)
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
