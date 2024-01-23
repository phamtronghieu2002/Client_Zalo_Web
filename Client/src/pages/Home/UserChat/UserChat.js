import Search from '../../../components/Search/Search';
import { useState } from 'react';
import clsx from 'clsx';
import './UserChat.scss';
import AccountItem from './AccountItem/AccountItem';
const UserChat = () => {
    const [acitve, setActive] = useState(1);

    return (
        <div id="wp_user_chat">
            <Search />
            <div className="filter_chat">
                <span onClick={() => setActive(1)} className={clsx('filter_item', acitve ? 'active' : '')}>
                    Tất cả
                </span>
                <span onClick={() => setActive(0)} className={clsx('filter_item', !acitve ? 'active' : '')}>
                    Chưa đọc
                </span>
            </div>
            <div className="usersChat">
                <AccountItem />
            </div>
        </div>
    );
};

export default UserChat;
