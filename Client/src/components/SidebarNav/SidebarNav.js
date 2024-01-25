import './SidebarNav.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import UserPopper from '../Popper/UserPopper/UserPopper';
import SettingPopper from '../Popper/SettingPopper/SettingPopper';
import configs from '../../configs';
export default function SidebarNav() {

    const [isOpenPopper, setIsOpenPopper] = useState({
        user: false,
        setting: false,
    });

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        setIsOpenPopper({
            user: false,
            setting: false,
        });
    };

    const handleUserClickOpenPopperUser = (event) => {
        event.stopPropagation();
        setIsOpenPopper({
            setting: false,
            user: true,
        });
    };
    const handleUserClickOpenPopperSetting = (event) => {
        event.stopPropagation();
        setIsOpenPopper({
            setting: true,
            user: false,
        });
    };

    return (
        <div id="wp_SidebarNav">
            {isOpenPopper.user && <UserPopper />}

            <div style={{ flex: 1 }}>
                <div onClick={handleUserClickOpenPopperUser} className="wp_avt">
                    <img
                        alt="avt"
                        src="https://s120-ava-talk.zadn.vn/0/d/9/7/12/120/e9605516219e69b3d6465839d961b04e.jpg"
                        className="a-child"
                    />
                </div>
                <Link to={configs.paths.home} className=" nav_item position-relative">
                    <i className="fa-solid fa-message nav_icon"></i>
                    {/* circle num */}
                    <div className="nav_num">1</div>
                </Link>

                <Link className=" nav_item position-relative" to={configs.paths.phonebook}>
                    <i className="fa-solid fa-book nav_icon"></i>
                </Link>
            </div>

            <div className=" nav_item position-relative">
                <i className="fa-solid fa-toolbox nav_icon"></i>
            </div>

            <div onClick={handleUserClickOpenPopperSetting} className=" nav_item position-relative">
                <i className="fa-solid fa-gear nav_icon"></i>
                {isOpenPopper.setting && <SettingPopper />}
            </div>
        </div>
    );
}
