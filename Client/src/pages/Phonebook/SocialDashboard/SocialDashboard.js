import './style.scss';
import Search from '../../../components/Search/Search';
import SocialItem from './SocialItem/SocialItem';
import { useLang } from '../../../hooks';

function SocialDashboard({ setSocialSelect ,setCount}) {
    const { t } = useLang();
    const socials = [
        {
            icon: <i className="fa-solid fa-user"></i>,
            callback: () => {
             
                setSocialSelect({
                    type: 'friend',

                    icon: <i className="fa-solid fa-user"></i>,
                });
            },
            title: t('home.social_list.friend'),
        },
        {
            icon: <i className="fa-solid fa-user-group"></i>,
            callback: () => {
                setSocialSelect({
                    type: 'group',

                    icon: <i className="fa-solid fa-user-group"></i>,
                });
            },
            title: t('home.social_list.group'),
        },
        {
            icon: <i className="fa-solid fa-envelope"></i>,
            callback: () => {
                setSocialSelect({
                    type: 'message',

                    icon: <i className="fa-solid fa-envelope"></i>,
                });
            },
            title: t('home.social_list.request_invite'),
        },
    ];
    return (
        <div id="wp_socialDashboard">
            <Search />
            <div className="list_social">
                {socials.map((social, index) => (
                    <SocialItem key={index} {...social} />
                ))}
            </div>
        </div>
    );
}

export default SocialDashboard;
