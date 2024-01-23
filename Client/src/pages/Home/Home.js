import "./Home.scss"
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import UserChat from "./UserChat/UserChat";
function Home() {

  return (
    <div id="wp_home_page">
      <SidebarNav/>
      <UserChat/>
    </div>
  );
}

export default Home;
