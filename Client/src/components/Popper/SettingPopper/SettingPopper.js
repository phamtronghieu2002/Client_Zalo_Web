import './SettingPopper.scss';
import { VI } from 'country-flag-icons/react/3x2';
import { US } from 'country-flag-icons/react/3x2';
import ManuItemPopper from '../MenuItemPopper/MenuItemPopper';
const header_menu = [
    { title: 'Thông tin tài khoản', Icon: <i class="fa-regular fa-user"></i>, callback: () => {} },
    { title: 'Cài đặt', Icon: <i class="fa-solid fa-gear"></i>, callback: () => {} },
];

const body_menu = [
    {
        title: 'Dữ Liệu',
        Icon: <i class="fa-solid fa-database"></i>,
        callback: () => {},
        subMenu: [{ title: 'quản lí file', callback: () => {} }],
    },
    {
        title: 'Công cụ',
        Icon: <i class="fa-solid fa-wrench"></i>,
        callback: () => {},
        subMenu: [{ title: 'gửi file log', callback: () => {} }],
    },
    {
        title: 'Ngôn ngữ',
        Icon: <i class="fa-solid fa-earth-americas"></i>,
        callback: () => {},
        subMenu: [
            { title: 'tiếng việt', Icon: <VI className="flag_language" />, callback: () => {} },
            { title: 'tiếng anh', Icon: <US className="flag_language" />, callback: () => {} },
        ],
    },
];

const foot_menu = [{ title: 'Đăng xuất', callback: () => {}, titleStyle: 'text-danger fw-bold' }];
function SettingPopper() {
    return (
        <div id="wp_popper_setting">
            {header_menu.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
            <div className="zmenu-separator"></div>
            {body_menu.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
            <div className="zmenu-separator"></div>
            {foot_menu.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
        </div>
    );
}

export default SettingPopper;
