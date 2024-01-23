import './UserPoper.scss';
import ManuItemPopper from '../MenuItemPopper/MenuItemPopper';
const main_menu = [
    { title: 'Hồ Sơ Của bạn', callback: () => {} },
    { title: 'Cài đặt', callback: () => {} },
];
const foot_menu = [{ title: 'Đăng xuất', callback: () => {} }];
function UserPopper() {
    return (
        <div id="wp_popper_user">
            <h4 className="fw-bold ps-1">Phạm Trọng Hiếu</h4>
            <div className="zmenu-separator"></div>
            {main_menu.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
            <div className="zmenu-separator"></div>

            {foot_menu.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
        </div>
    );
}

export default UserPopper;
