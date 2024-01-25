import './SettingPopper.scss';
import { VI } from 'country-flag-icons/react/3x2';
import { US } from 'country-flag-icons/react/3x2';
import {useLang} from '../../../hooks';
import configs from '../../../configs';
import ManuItemPopper from '../MenuItemPopper/MenuItemPopper';

function SettingPopper() {

    const  {t,i18n} =useLang();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
    const header_menu = [
        { title: t('home.popper.setting.account_information'), Icon: <i className="fa-regular fa-user"></i>, callback: () => {} },
        { title: t('home.popper.setting.setting'), Icon: <i className="fa-solid fa-gear"></i>, callback: () => {} },
    ];
    
    const body_menu = [
        {
            title: t('home.popper.setting.data'),
            Icon: <i className="fa-solid fa-database"></i>,
            callback: () => {},
            subMenu: [{ title: 'quản lí file', callback: () => {} }],
        },
        {
            title: t('home.popper.setting.tools'),
            Icon: <i className="fa-solid fa-wrench"></i>,
            callback: () => {},
            subMenu: [{ title: 'gửi file log', callback: () => {} }],
        },
        {
            title: t('home.popper.setting.language'),
            Icon: <i className="fa-solid fa-earth-americas"></i>,
            callback: () => {},
            subMenu: [
                { title: 'tiếng việt', Icon: <VI classNameName="flag_language" />, callback: () => {handleChangeLanguage(configs.i18n.default)} },
                { title: 'tiếng anh', Icon: <US classNameName="flag_language" />, callback: () => {handleChangeLanguage(configs.i18n.supportedLangs.en)} },
            ],
        },
    ];
    
    const foot_menu = [{ title: t('home.popper.setting.logout'), callback: () => {}, titleStyle: 'text-danger fw-bold' }];
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
