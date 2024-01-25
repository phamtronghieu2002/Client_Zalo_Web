import './AccountItem.scss';
import DetailUserChatPopper from '../../../../components/Popper/DetailUserChatPopper/DetailUserChatPopper';
import { useEffect, useState } from 'react';
import React from 'react';
import { useLang } from '../../../../hooks';
function AccountItem({id,onDetail,openPopper}) {

    const { t } = useLang();
      const [openDetail,setOpenDetail]=useState(false);

useEffect(() => {

    window.addEventListener("click",()=>setOpenDetail(false));

    if(openPopper===id){
        setTimeout(() => {
            setOpenDetail(true);
        }, 200);
    }else{
        openDetail &&  setOpenDetail(false);
    }

},[openPopper])


    return (
        <div  className="d-flex position-relative account_item_chat">
          {openDetail && <DetailUserChatPopper/> }  
            <div className="avatar">
                <img
                    className="single_chat_avatar"
                    src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                    alt="avt"
                />
            </div>
            <div className="infor">
                <span className="display_name">Pham Hieu</span>
                <br />
                <span className="last_message">Hello</span>
            </div>
            <span className="timer_message">{`5 ${t('home.account_chat_item.timmer.day')}`}</span>
            <button
            onClick={onDetail}
            className="detail_btn">...</button>

            <div className="num_message_miss">1</div>
        </div>
    );
}

export default React.memo(AccountItem);
