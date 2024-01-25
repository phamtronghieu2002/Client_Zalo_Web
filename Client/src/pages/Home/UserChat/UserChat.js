import './UserChat.scss';
import { useState} from 'react';
import Search from '../../../components/Search/Search';
import clsx from 'clsx';
import AccountItem from './AccountItem/AccountItem';
const UserChat = () => {
    const [acitve, setActive] = useState(1);
    const [openPopper,setOpenPopper]=useState("");

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
          {
            [1,2,3,4,5,6,7,8,9,10].map((item,index)=>(
                <AccountItem 
                key={index} 
                id={item}
                openPopper={openPopper}
                onDetail={()=>setOpenPopper(item)}
                />
                ))
          }
            </div>
        </div>
    );
};

export default UserChat;
