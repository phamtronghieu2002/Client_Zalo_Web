import './SettingPopper.scss';
import { VI } from 'country-flag-icons/react/3x2';
import { US } from 'country-flag-icons/react/3x2';
import ManuItemPopper from '../MenuItemPopper/MenuItemPopper';
const header_menu = [
    { title: 'Thông tin tài khoản', Icon: <i className="fa-regular fa-user"></i>, callback: () => {} },
    { title: 'Cài đặt', Icon: <i className="fa-solid fa-gear"></i>, callback: () => {} },
];

const body_menu = [
    {
        title: 'Dữ Liệu',
        Icon: <i className="fa-solid fa-database"></i>,
        callback: () => {},
        subMenu: [{ title: 'quản lí file', callback: () => {} }],
    },
    {
        title: 'Công cụ',
        Icon: <i className="fa-solid fa-wrench"></i>,
        callback: () => {},
        subMenu: [{ title: 'gửi file log', callback: () => {} }],
    },
    {
        title: 'Ngôn ngữ',
        Icon: <i className="fa-solid fa-earth-americas"></i>,
        callback: () => {},
        subMenu: [
            { title: 'tiếng việt', Icon: <VI classNameName="flag_language" />, callback: () => {} },
            { title: 'tiếng anh', Icon: <US classNameName="flag_language" />, callback: () => {} },
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
            <div classNameName="zmenu-separator"></div>
            {body_menu.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
            <div classNameName="zmenu-separator"></div>
            {foot_menu.map((item, index) => (
                <ManuItemPopper key={index} {...item} />
            ))}
        </div>
    );
}

export default SettingPopper;
