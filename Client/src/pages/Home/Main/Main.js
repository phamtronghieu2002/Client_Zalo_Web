import "./Main.scss"
import Chat from "./Chat/Chat";
import Aside from "./Aside/Aside";
function Main() {
    return (
        <div id="main_container" className="d-flex">
        <Chat/>
        <Aside/>
        </div>
    );
}

export default Main;
