import configs from "../configs"
import { Home,Login,Phonebook } from "../pages"
const PublicRoutes=[
  {
    path:configs.paths.login,
    element:<Login/>
  }
]

const PrivateRoutes=[

  {
    path:configs.paths.phonebook,
    element:<Phonebook/>
  },
  {
    path:configs.paths.home,
    element:<Home/>
  },
]


export {PublicRoutes,PrivateRoutes}