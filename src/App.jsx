import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Homepage from './page/home'
import DetailPage from './page/detail/'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Homepage />,
    },
    {
      path:"/dog/:name",
      element:<DetailPage />
    }
  ])

  return (
    <div className='bg-[url("/source/pexels-miguel-á-padriñán-255379.jpg")] min-h-[100vh] bg-no-repeat bg-cover'>
      <header className="bg-black h-[60px] flex">
        <div className="flex items-center">
          <img className="w-[30px] h-[30px] ml-[20px] mr-[15px]" src="https://freesvg.org/img/paw2.png" alt="" />
          <span className="text-white font-bold text-lg">BokBok</span>
        </div>
      </header>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
