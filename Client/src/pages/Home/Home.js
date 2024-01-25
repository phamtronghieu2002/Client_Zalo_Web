import "./Home.scss"
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import UserChat from "./UserChat/UserChat";
import Main from "./Main/Main";
function Home() {

  return (
    <div id="wp_home_page">
      <SidebarNav/>
      <UserChat/>
      <Main/>
    </div>
  );
}

export default Home;
