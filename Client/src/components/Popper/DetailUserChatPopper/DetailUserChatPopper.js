import "./style.scss";
import ManuItemPopper from '../MenuItemPopper/MenuItemPopper';
const header_menu = [
    { title: 'Thông tin tài khoản', Icon: <i classname="fa-regular fa-user"></i>, callback: () => {} },
    { title: 'Cài đặt', Icon: <i classname="fa-solid fa-gear"></i>, callback: () => {} },
];

const menus = [
    {
        title: 'ghim hội thoại',
        callback: () => {},
    },
    {
        title: 'đánh dấu chưa đọc',
        callback: () => {},
    },
    {
        title: 'thêm vào nhóm',
        callback: () => {},
    },
    {
        title: 'ẩn trò chuyện',
        callback: () => {},
    },
    {
        title: 'xóa hội thoại',
        callback: () => {},
        titleStyle: 'text-danger fw-bold',
    },


];

function DetailUserChatPopper() {
    return ( 
        <div className="wp_detail_user_chat_popper">
       
     
            {menus.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
       

        </div>
     );
}

export default DetailUserChatPopper;