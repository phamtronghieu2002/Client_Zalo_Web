import './AccountItem.scss';
function AccountItem() {
    return (
        <div id="account_item_chat" className='d-flex position-relative'>
            <div className="avatar">
                <img
                className='single_chat_avatar'
                src="https://s120-ava-talk.zadn.vn/0/d/9/7/12/120/e9605516219e69b3d6465839d961b04e.jpg"
                alt="avt"
                />
            </div>
            <div className="infor">
                <span className="display_name">Pham Hieu</span>
                <br/>
                <span className="last_message">Hello</span>
            </div>
            <span className="timer_message">5 phut</span>
            <button className="detail_btn">...</button>
      
                  <div className="num_message_miss">1</div>
        </div>
    );
}

export default AccountItem;
