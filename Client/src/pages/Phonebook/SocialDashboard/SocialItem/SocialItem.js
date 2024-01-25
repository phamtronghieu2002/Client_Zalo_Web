import './SocialItem.scss';
function SocialItem({ icon, title, callback }) {
    return (
        <div onClick={callback} className="social_item">
            <div className="icon">{icon}</div>
            <div className="title">{title}</div>
        </div>
    );
}

export default SocialItem;
