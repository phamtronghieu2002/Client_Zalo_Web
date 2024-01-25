import './UserPoper.scss';
import ManuItemPopper from '../MenuItemPopper/MenuItemPopper';
import {useLang} from "..//..//..//hooks"


function UserPopper() {
const {t} = useLang();
    const main_menu = [
        { title: t('home.popper.user.profile'), callback: () => {} },
        { title:t('home.popper.user.setting'), callback: () => {} },
    ];
    const foot_menu = [{ title: t('home.popper.user.logout'), callback: () => {window.location.href="/login"} }];
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
