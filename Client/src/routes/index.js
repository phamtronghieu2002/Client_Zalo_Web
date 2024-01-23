import configs from "../configs"
import { Home,Login } from "../pages"
const PublicRoutes=[
  {
    path:configs.paths.login,
    element:<Login/>
  }
]

const PrivateRoutes=[
  {
    path:configs.paths.home,
    element:<Home/>
  },

]


export {PublicRoutes,PrivateRoutes}