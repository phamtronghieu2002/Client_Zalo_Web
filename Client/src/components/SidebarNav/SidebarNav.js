import './SidebarNav.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import UserPopper from '../Popper/UserPopper/UserPopper';
import SettingPopper from '../Popper/SettingPopper/SettingPopper';
export default function SidebarNav() {
    const [isOpenPopper, setIsOpenPopper] = useState({
        user: false,
        setting: false,
    });


    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        // Kiểm tra xem có popper nào đang mở hay không
        if (isOpenPopper.user || isOpenPopper.setting) {
          console.log('click outside');
        
            setIsOpenPopper({
              user: false,
              setting: false,
            });
        
        }
      };

    const handleUserClickOpenPopperUser = (event) => {
        // Ngăn chặn sự kiện click từ việc propagate lên trên và đóng popper setting
        event.stopPropagation();
        setIsOpenPopper({
            setting: false,
            user: true,
        });
    };
    const handleUserClickOpenPopperSetting = (event) => {
        // Ngăn chặn sự kiện click từ việc propagate lên trên và đóng popper setting
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
                <Link className=" nav_item position-relative" to={'/'}>
                    <i class="fa-solid fa-message nav_icon"></i>
                    {/* circle num */}
                    <div className="nav_num">1</div>
                </Link>

                <Link className=" nav_item position-relative" to={'/'}>
                    <i class="fa-solid fa-book nav_icon"></i>
                </Link>
            </div>

            <div className=" nav_item position-relative">
                <i class="fa-solid fa-toolbox nav_icon"></i>
            </div>

            <div
                onClick={handleUserClickOpenPopperSetting}
                className=" nav_item position-relative"
            >
                <i class="fa-solid fa-gear nav_icon"></i>
                {isOpenPopper.setting && <SettingPopper />}
            </div>
        </div>
    );
}
