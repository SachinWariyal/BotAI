import './App.css'
// import NewChat from './Components/NewChat/NewChat'
import Home from './Pages/Home/Home'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

  // const router = createBrowserRouter([
  //   {
  //     path : '/',
  //     element: <Home/>
  //   },
  //   {
  //     path: 'newchat',
  //     element: <NewChat/>
  //   }
  // ])

  return(
  <div className="app">
    <Home/>
    {/* <RouterProvider router={router}/>  */}
  </div>)
}

export default App
