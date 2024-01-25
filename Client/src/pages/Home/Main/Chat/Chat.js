import './Chat.scss';
import { useLang } from '../../../../hooks';
function Chat() {

    const {t} =useLang();
    return (
        <div id="chat_container">
            <div className="header">
                <div className="infor">
                    <div className="avatar">
                        <img
                            src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                            alt="avatar"
                        />
                    </div>
                    <div>
                        <div className="name fw-bold">
                            <span>Nguyễn Văn A</span>
                        </div>

                        <div className="status">
                            <span>{t('home.account_chat_item.status.online')}</span>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <button className="group_plus action_btn">
                        <img
                            width="80"
                            height="80"
                            src="https://img.icons8.com/dotty/80/add-user-group-man-woman.png"
                            alt="add-user-group-man-woman"
                        />
                    </button>
                    <button className=" action_btn">
                        <img
                            width="50"
                            height="50"
                            src="https://img.icons8.com/ios/50/search--v1.png"
                            alt="search--v1"
                        />
                    </button>
                    <button className=" action_btn">
                        <img
                            width="50"
                            height="50"
                            src="https://img.icons8.com/ios/50/video-call.png"
                            alt="video-call"
                        />
                    </button>
                    <button className=" action_btn">
                        <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/fluency/48/switch-on.png"
                            alt="switch-on"
                        />
                    </button>
                </div>
            </div>

            <div className="chat_content"></div>

            <div className="chat_input_container">
                <div className="actions">
                    <button className="action_btn">
                        <img
                            width="66"
                            height="66"
                            src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Sticky-Note-school-smashingstocks-flat-smashing-stocks.png"
                            alt="external-Sticky-Note-school-smashingstocks-flat-smashing-stocks"
                        />
                    </button>{' '}
                    <button className="action_btn">
                        <img
                            width="58"
                            height="58"
                            src="https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/58/external-album-photography1-sbts2018-lineal-color-sbts2018-1.png"
                            alt="external-album-photography1-sbts2018-lineal-color-sbts2018-1"
                        />
                    </button>
                    <button className="action_btn">
                        <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/employee-card.png"
                            alt="employee-card"
                        />
                    </button>
                    <button className="action_btn">
                        <img
                            width="100"
                            height="100"
                            src="https://img.icons8.com/avantgarde/100/screenshot.png"
                            alt="screenshot"
                        />
                    </button>
                    <button className="action_btn">
                    <img width="24" height="24" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-attache-file-tanah-basah-basic-outline-tanah-basah.png" alt="external-attache-file-tanah-basah-basic-outline-tanah-basah"/>
                    </button>
               
                </div>
             <div className='chat_input'>
                <input type="text" placeholder="Aa" />
                <button className="action_btn">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/sent.png" alt="sent"/>
                </button>
             </div>
            </div>
        </div>
    );
}

export default Chat;
