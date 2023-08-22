import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Homepage from './page/home'
import DetailPage from './page/detail/'
import DetailPageTH from './page/detailTH'
import HomepageTH from './page/homeTH'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Homepage />,
    },
    {
      path:"/dog/:name",
      element:<DetailPage />
    },
    {
      path:"/TH",
      element: <HomepageTH />,
    },
    {
      path:"/TH/dog/:name",
      element:<DetailPageTH />
    },
  ])

  return (
    <div className='bg-[url("/source/pexels-miguel-á-padriñán-255379.jpg")] bg-repeat-y bg-cover'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
